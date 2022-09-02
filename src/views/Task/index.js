import React, { useState, useEffect } from 'react';
import * as S from './styles';

import api from '../../services/api';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import TypeIcons from '../../utils/typeIcons';


function Task() {
    const [lateCount, setLateCount] = useState();

    async function lateVerify() {
        await api.get(`/task/filter/late/11:11:11:11:11:11`)
            .then(response => {
                setLateCount(response.data.length);
            })
    }

    useEffect(() => {
        lateVerify();
    }, []);


    return (
        <S.Container>
            <Header lateCount={lateCount}  />
                <S.Form >
                    <S.TypeIcons>
                        {
                            TypeIcons.map((icon, index) => (
                                index > 0 && <img src={icon} alt="Tipo da Tarefa" />
                            ))
                        }
                    </S.TypeIcons>
                </S.Form>
            <Footer />
        </S.Container>
    )
}

export default Task;