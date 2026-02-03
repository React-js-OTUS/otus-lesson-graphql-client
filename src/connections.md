src\components\CompletedForms\AnimalAddCompletedForm\connection.ts

```ts
export const ADD_ANIMAL = gql`
    mutation AddAnimal($input: AnimalAddInput!) {
        addAnimal(input: $input) {
            ... on Bird { id }
            ... on Dog { id }
            ... on Cat { id }
        }
    }
`;
```

src\components\CompletedForms\AnimalUpdateCompletedForm\connection.ts

```ts
export const UPDATE_ANIMAL = gql`
    mutation UpdateAnimal($id: ID!, $input: AnimalUpdateInput!) {
        updateAnimal(id: $id, input: $input) {
            ... on Bird { id }
            ... on Dog { id }
            ... on Cat { id }
        }
    }
`;
```

src\components\CompletedForms\ChangePasswordCompletedForm\connection.ts

```ts
export const CHANGE_PASSWORD = gql`
  mutation Change($input: ChangePasswordInput!) {
    profile {
      password {
        change(input: $input) {
          success
        }
      }
    }
  }
`;
```

src\components\CompletedForms\DiseaseAddCompletedForm\connection.ts

```ts
export const ADD_DISEASE = gql`
    mutation AddDisease($input: DiseaseInput!) {
        addDisease(input: $input) {
            id
            type
            name
            desc
        }
    }
`;
```

src\components\CompletedForms\DiseaseUpdateCompletedForm\connection.ts

```ts
export const UPDATE_DISEASE = gql`
    mutation UpdateDisease($updateDiseaseId: ID!, $input: DiseaseInput!) {
        updateDisease(id: $updateDiseaseId, input: $input) {
            id
            type
            name
            desc
        }
    }
`;
```

src\components\CompletedForms\MedicineAddCompletedForm\connection.ts

```ts
export const ADD_MEDICINE = gql`
    mutation AddMedicine($input: MedicineInput!) {
        addMedicine(input: $input) {
            id
            name
            heal
        }
    }
`;
```

src\components\CompletedForms\MedicineUpdateCompletedForm\connection.ts

```ts
export const UPDATE_MEDICINE = gql`
  mutation UpdateMedicine($updateMedicineId: ID!, $input: MedicineInput!) {
    updateMedicine(id: $updateMedicineId, input: $input) {
      id
      name
      heal
    }
  }
`;
```

src\components\CompletedForms\ProfileCompletedForm\connection.ts

```ts
export const UPDATE_PROFILE = gql`
  mutation Update($input: UpdateProfileInput!) {
    profile {
      update(input: $input) {
        id
        nickname
        signUpDate
      }
    }
  }
`;
```

src\components\ManagePanel\connection.ts

```ts
export const SET_DOCTOR_FOR_ANIMAL = gql`
  mutation setDoctorForAnimal($id: ID!, $doctorId: ID!) {
    updateAnimal(id: $id, input: { doctorId: $doctorId }, partial: true) {
      ... on Bird { id }
      ... on Dog { id }
      ... on Cat { id }
    }
  }
`;
```

src\connection\fragments.ts

```ts
export const PROFILE_FRAGMENT = gql`
    fragment Profile on Profile {
        id
        nickname
        signUpDate
    }
`;

export const USER_FRAGMENT = gql`
    fragment User on User {
        id
        nickname
        signUpDate
    }
`;

export const MEDICINE_FRAGMENT = gql`
    fragment Medicine on Medicine {
        heal
        id
        name
    }
`;

export const DISEASE_FRAGMENT = gql`
    fragment Disease on Disease {
        desc
        id
        name
        type
    }
`;

export const DOG_FRAGMENT = gql`
    fragment Dog on Dog {
        id
        name
        comment
        age
        doctor {
            id
        }
        diseases {
            ...Disease
        }
        updatedAt
    }
    ${DISEASE_FRAGMENT}
`;

export const CAT_FRAGMENT = gql`
    fragment Cat on Cat {
        id
        name
        comment
        age
        doctor {
            id
        }
        diseases {
            ...Disease
        }
        updatedAt
    }
    ${DISEASE_FRAGMENT}
`;
export const BIRD_FRAGMENT = gql`
    fragment Bird on Bird {
        id
        name
        comment
        age
        doctor {
            id
        }
        diseases {
           ...Disease
        }
        updatedAt
    }

    ${DISEASE_FRAGMENT}
`;
export const ANIMAL_FRAGMENT = gql`
    fragment Animal on Animal {
        ... on Cat {
            ... Cat
        }
        ... on Dog {
            ... Dog
        }
        ... on Bird {
            ... Bird
        }
    }
    
    ${DOG_FRAGMENT}
    ${CAT_FRAGMENT}
    ${BIRD_FRAGMENT}
`;

```

src\screens\AuthScreen\connections.ts

```ts
export const SIGN_IN = gql`
    mutation Signin($nickname: String!, $password: String!) {
      profile {
        signin(nickname: $nickname, password: $password) {
          token
        }
      }
    }
`;

export const SIGN_UP = gql`
  mutation Signup($nickname: String!, $password: String!) {
    profile {
      signup(nickname: $nickname, password: $password) {
        token
      }
    }
  }
`;
```

src\screens\Cabinet\connection.ts

```ts
export const TO_HEAL_ANIMAL = gql`
  mutation toHealAnimal($id: ID!, $diseaseIds: [ID!]) {
    updateAnimal(id: $id, input: { diseaseIds: $diseaseIds }, partial: true) {
      ... on Bird { id }
      ... on Dog { id }
      ... on Cat { id }
    }
  }
`;
```
