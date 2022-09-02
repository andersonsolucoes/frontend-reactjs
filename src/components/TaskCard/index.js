import React, { useMemo } from 'react';
import * as S from './styles';
import format from 'date-fns/format';
import typeIcons from '../../utils/typeIcons';


function TaskCard({ type, title, when }) {
  // eslint-disable-next-line
  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'));
  // eslint-disable-next-line
  const hour = useMemo(() => format(new Date(when), 'HH:mm'));
  return (
    <S.Container>
      <S.TopCard>
        <img src={typeIcons[type]} alt="Icon da Tarefa" />
        <h3>{title}</h3>
      </S.TopCard>
      <S.BottomCard>
        <strong>{date}</strong>
        <span>{hour}</span>
      </S.BottomCard>
    </S.Container>
  )
}

export default TaskCard;