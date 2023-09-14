import { ApolloError } from '@apollo/client';
import { GraphQLError } from 'graphql';

export type ErrorHandlers<Err extends Record<string, unknown> = Record<string, unknown>> = {
  catcher: (error: ApolloError) => void;
  catcherValidator: (params: {
    setErrors: (errors: Err) => void;
    getMessage: (code: string, graphqlError: GraphQLError, apolloError: ApolloError) => string;
  }) => (error: ApolloError) => void;
};

export type ValidatorSchema<K extends string> = Partial<Record<K, string[]>>;

export const mapApolloError =
  (action: (err: GraphQLError, error: ApolloError) => void) =>
  (error: ApolloError): boolean => {
    if (
      'networkError' in error &&
      error.networkError &&
      'result' in error.networkError &&
      error.networkError.result &&
      typeof error.networkError.result === 'object' &&
      'errors' in error.networkError.result &&
      Array.isArray(error.networkError.result.errors)
    ) {
      error.networkError.result.errors.forEach((err) => action(err, error));
      return true;
    }
    if ('graphQLErrors' in error) {
      error.graphQLErrors.forEach((err) => action(err, error));
      return true;
    }
    return false;
  };

export const createErrorHandlers = <
  Keys extends string = string,
  Err extends Record<string, unknown> = Record<string, unknown>
>(
  handle: (code: string | null, graphqlError: GraphQLError | null, apolloError: ApolloError) => void,
  validatorSchema?: ValidatorSchema<Keys>
): ErrorHandlers<Err> => ({
  catcher: (error) => {
    const handled = mapApolloError((err) => {
      handle(err.extensions.code as string, err, error);
    })(error);
    if (!handled) {
      handle(null, null, error);
    }
  },
  catcherValidator: ({ setErrors, getMessage }) => {
    const keys = Object.keys(validatorSchema || {}) as Keys[];
    return mapApolloError((err, error) => {
      const code = err.extensions.code as string;
      const index = keys.findIndex((key) => validatorSchema[key].includes(code));
      if (index !== -1) {
        const key = keys[index];
        setErrors({ [key]: getMessage(code, err, error) } as Err);
      } else {
        handle(code, err, error);
      }
    });
  },
});
