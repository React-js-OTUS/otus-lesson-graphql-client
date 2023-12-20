import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { useQuery, useSubscription } from '@apollo/client';
import {
  GET_INITIAL_DATA,
  GetInitialDataResponse,
  SUB_ADDED_ANIMAL,
  SUB_ADDED_DISEASE,
  SUB_ADDED_MEDICINE,
  SUB_ADDED_USER,
  SUB_REMOVED_ANIMAL,
  SUB_REMOVED_DISEASE,
  SUB_REMOVED_MEDICINE,
  SUB_REMOVED_USER,
  SUB_UPDATED_ANIMAL,
  SUB_UPDATED_DISEASE,
  SUB_UPDATED_MEDICINE,
  SUB_UPDATED_USER,
  SubAddedAnimalResponse,
  SubAddedDiseaseResponse,
  SubAddedMedicineResponse,
  SubAddedUserResponse,
  SubRemovedAnimalResponse,
  SubRemovedDiseaseResponse,
  SubRemovedMedicineResponse,
  SubRemovedUserResponse,
} from './connection';

export type StoreProviderProps = {
  children?: React.ReactNode;
};

const StoreContext = createContext({} as GetInitialDataResponse);

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const { data, client } = useQuery<GetInitialDataResponse>(GET_INITIAL_DATA);

  useSubscription(SUB_UPDATED_USER);
  useSubscription(SUB_UPDATED_ANIMAL);
  useSubscription(SUB_UPDATED_DISEASE);
  useSubscription(SUB_UPDATED_MEDICINE);

  const userAddedSub = useSubscription<SubAddedUserResponse>(SUB_ADDED_USER);
  const animalAddedSub = useSubscription<SubAddedAnimalResponse>(SUB_ADDED_ANIMAL);
  const diseaseAddedSub = useSubscription<SubAddedDiseaseResponse>(SUB_ADDED_DISEASE);
  const medicineAddedSub = useSubscription<SubAddedMedicineResponse>(SUB_ADDED_MEDICINE);

  const userRemovedSub = useSubscription<SubRemovedUserResponse>(SUB_REMOVED_USER);
  const animalRemovedSub = useSubscription<SubRemovedAnimalResponse>(SUB_REMOVED_ANIMAL);
  const diseaseRemovedSub = useSubscription<SubRemovedDiseaseResponse>(SUB_REMOVED_DISEASE);
  const medicineRemovedSub = useSubscription<SubRemovedMedicineResponse>(SUB_REMOVED_MEDICINE);

  useEffect(() => {
    if (animalAddedSub.data) {
      const cached = client.readQuery<GetInitialDataResponse>({ query: GET_INITIAL_DATA });
      const _data = {
        ...cached,
        animals: [...cached.animals, animalAddedSub.data.addedAnimal],
      };
      client.writeQuery({ query: GET_INITIAL_DATA, data: _data });
    }
  }, [client, animalAddedSub.data]);

  useEffect(() => {
    if (animalRemovedSub.data) {
      const cached = client.readQuery<GetInitialDataResponse>({ query: GET_INITIAL_DATA });
      const _data = {
        ...cached,
        animals: cached.animals.filter((i) => i.id !== animalRemovedSub.data?.removedAnimal?.id),
      };
      client.writeQuery({ query: GET_INITIAL_DATA, data: _data });
    }
  }, [client, animalRemovedSub.data]);

  useEffect(() => {
    if (diseaseAddedSub.data) {
      const cached = client.readQuery<GetInitialDataResponse>({ query: GET_INITIAL_DATA });
      const _data = {
        ...cached,
        diseases: [...cached.diseases, diseaseAddedSub.data.addedDisease],
      };
      client.writeQuery({ query: GET_INITIAL_DATA, data: _data });
    }
  }, [client, diseaseAddedSub.data]);

  useEffect(() => {
    if (diseaseRemovedSub.data) {
      const cached = client.readQuery<GetInitialDataResponse>({ query: GET_INITIAL_DATA });
      const _data = {
        ...cached,
        diseases: cached.diseases.filter((i) => i.id !== diseaseRemovedSub.data?.removedDisease?.id),
      };
      client.writeQuery({ query: GET_INITIAL_DATA, data: _data });
    }
  }, [client, diseaseRemovedSub.data]);

  useEffect(() => {
    if (medicineAddedSub.data) {
      const cached = client.readQuery<GetInitialDataResponse>({ query: GET_INITIAL_DATA });
      const _data = {
        ...cached,
        medicines: [...cached.medicines, medicineAddedSub.data.addedMedicine],
      };
      client.writeQuery({ query: GET_INITIAL_DATA, data: _data });
    }
  }, [client, medicineAddedSub.data]);

  useEffect(() => {
    if (medicineRemovedSub.data) {
      const cached = client.readQuery<GetInitialDataResponse>({ query: GET_INITIAL_DATA });
      const _data = {
        ...cached,
        medicines: cached.medicines.filter((i) => i.id !== medicineRemovedSub.data?.removedMedicine?.id),
      };
      client.writeQuery({ query: GET_INITIAL_DATA, data: _data });
    }
  }, [client, medicineRemovedSub.data]);

  useEffect(() => {
    if (userAddedSub.data) {
      const cached = client.readQuery<GetInitialDataResponse>({ query: GET_INITIAL_DATA });
      const _data = {
        ...cached,
        users: [...cached.users, userAddedSub.data.addedUser],
      };
      client.writeQuery({ query: GET_INITIAL_DATA, data: _data });
    }
  }, [client, userAddedSub.data]);

  useEffect(() => {
    if (userRemovedSub.data) {
      const cached = client.readQuery<GetInitialDataResponse>({ query: GET_INITIAL_DATA });
      const _data = {
        ...cached,
        users: cached.users.filter((i) => i.id !== userRemovedSub.data?.removedUser?.id),
      };
      client.writeQuery({ query: GET_INITIAL_DATA, data: _data });
    }
  }, [client, userRemovedSub.data]);

  const value = useMemo(() => data || ({} as GetInitialDataResponse), [data]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};
