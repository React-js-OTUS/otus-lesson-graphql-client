import React, { forwardRef } from 'react';
import cn from 'clsx';
import { Animal, AnimalType, AnimalUpdateInput } from 'src/server.types';
import { AnimalIcon } from 'src/components/AnimalIcon';
import { useTranslation } from 'react-i18next';
import { DiseaseCards } from 'src/components/DiseaseCards';
import { Title } from 'src/components/Title';
import { AnimalModalUpdateForm, DiseaseModalAddForm } from 'src/components/ModalForms';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import s from './AnimalInfoCard.sass';

export type AnimalInfoCardProps = React.HTMLAttributes<HTMLDivElement> & {
  isOver?: boolean;
  isAllowed?: boolean;
  value: Animal;
};

export type AnimalInfoCardRef = HTMLDivElement;

export const AnimalInfoCard = forwardRef<AnimalInfoCardRef, AnimalInfoCardProps>(
  ({ value, isOver, isAllowed, ...props }, ref) => {
    const { t } = useTranslation();
    if (!value) return null;

    const initial: AnimalUpdateInput = (() => ({
      age: value.age,
      comment: value.comment,
      diseaseIds: value.diseases?.map((i) => i.id),
      doctorId: value.doctor?.id,
      name: value.name,
      type: value.__typename as AnimalType,
    }))();

    return (
      <div ref={ref} {...props} className={cn(s.root, isOver && s.isOver, isOver && isAllowed && s.canDrop)}>
        <div className={s.top}>
          <div className={s.line}>
            <AnimalIcon value={value.__typename as AnimalType} />
            <div>{value.name || value.id}</div>
          </div>
          <AnimalModalUpdateForm id={value.id}>
            {({ open }) => <EditOutlined onClick={() => open(initial)} />}
          </AnimalModalUpdateForm>
        </div>
        <div className={cn(s.line, s.item)}>
          <Title>{t`components.AnimalInfoCard.age`}</Title>
          <div>{value.age}</div>
        </div>
        <div className={s.item}>
          <Title>{t`components.AnimalInfoCard.comment`}</Title>
          <div>{value.comment}</div>
        </div>
        <div className={s.item}>
          <div className={s.line}>
            <Title>{t`components.AnimalInfoCard.diseases`}</Title>
            <DiseaseModalAddForm>{({ open }) => <PlusOutlined onClick={() => open()} />}</DiseaseModalAddForm>
          </div>
          <DiseaseCards value={value.diseases} />
        </div>
      </div>
    );
  }
);
