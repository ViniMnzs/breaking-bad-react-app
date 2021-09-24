import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Collapse from '../../components/Collapse';

import { Container, Character, Profile, Text, Header, Search } from './styles';

type Profile = {
  appearance: Array<string>;
  betterCallSaulAppearance: Array<string>;
  birthday: string;
  category: string;
  charId: number;
  img: string;
  name: string;
  nickname: string;
  occupation: Array<string>;
  portrayed: string;
  status: string;
};

const Index: React.FC = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState<string>('');

  useEffect(() => {
    api.get(`/characters?name=${name}`).then(res => setCharacters(res.data));
  }, [name]);

  return (
    <>
      <Header>
        <Search
          placeholder="Digite o nome do personagem"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Header>
      <Container>
        {characters.length > 0 ? (
          characters.map((data: Profile, index) => (
            <Character key={index}>
              <Profile src={data.img} />
              <Collapse
                visible={<Text>{data.name}</Text>}
                invisible={
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <Text>{`Nickname: ${data.nickname};`}</Text>
                    <Text>{`Birthday: ${data.birthday};`}</Text>
                    <Text>{`Occupation: ${data.occupation};`}</Text>
                    <Text>{`Portrayed: ${data.portrayed};`}</Text>
                    <Text>{`Status: ${data.status}`}</Text>
                  </div>
                }
                open={false}
              />
            </Character>
          ))
        ) : (
          <Text>Carregando...</Text>
        )}
      </Container>
    </>
  );
};

export default Index;
