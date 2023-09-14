import { FC, useEffect } from 'react';
import { useSubscription } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { usersActions } from 'src/store/users';
import { animalsActions } from 'src/store/animals';
import { medicinesActions } from 'src/store/medicines';
import { diseasesActions } from 'src/store/diseases';
import {
  SUB_UPDATED_USER,
  SUB_UPDATED_ANIMAL,
  SUB_UPDATED_DISEASE,
  SUB_UPDATED_MEDICINE,
  SUB_REMOVE_DISEASE,
  SUB_REMOVE_MEDICINE,
  SUB_REMOVE_USER,
  SUB_REMOVE_ANIMAL,
  extractUpdatedUser,
  extractRemovedUser,
  extractUpdatedAnimal,
  extractUpdatedDisease,
  extractUpdatedMedicine,
  extractRemovedAnimal,
  extractRemovedDisease,
  extractRemovedMedicine,
} from './connection';

export const SubscriptionsListener: FC = () => {
  const userUpdateSub = useSubscription(SUB_UPDATED_USER);
  const animalUpdateSub = useSubscription(SUB_UPDATED_ANIMAL);
  const diseaseUpdateSub = useSubscription(SUB_UPDATED_DISEASE);
  const medicineUpdateSub = useSubscription(SUB_UPDATED_MEDICINE);

  const userRemoveSub = useSubscription(SUB_REMOVE_USER);
  const animalRemoveSub = useSubscription(SUB_REMOVE_ANIMAL);
  const diseaseRemoveSub = useSubscription(SUB_REMOVE_DISEASE);
  const medicineRemoveSub = useSubscription(SUB_REMOVE_MEDICINE);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersActions.update(extractUpdatedUser(userUpdateSub.data)));
  }, [dispatch, userUpdateSub.data]);
  useEffect(() => {
    dispatch(animalsActions.update(extractUpdatedAnimal(animalUpdateSub.data)));
  }, [dispatch, animalUpdateSub.data]);
  useEffect(() => {
    dispatch(diseasesActions.update(extractUpdatedDisease(diseaseUpdateSub.data)));
  }, [dispatch, diseaseUpdateSub.data]);
  useEffect(() => {
    dispatch(medicinesActions.update(extractUpdatedMedicine(medicineUpdateSub.data)));
  }, [dispatch, medicineUpdateSub.data]);

  useEffect(() => {
    dispatch(usersActions.remove(extractRemovedUser(userRemoveSub.data)));
  }, [dispatch, userRemoveSub.data]);
  useEffect(() => {
    dispatch(animalsActions.remove(extractRemovedAnimal(animalRemoveSub.data)));
  }, [dispatch, animalRemoveSub.data]);
  useEffect(() => {
    dispatch(diseasesActions.remove(extractRemovedDisease(diseaseRemoveSub.data)));
  }, [dispatch, diseaseRemoveSub.data]);
  useEffect(() => {
    dispatch(medicinesActions.remove(extractRemovedMedicine(medicineRemoveSub.data)));
  }, [dispatch, medicineRemoveSub.data]);

  return null;
};
