import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from './Input';
import { BackIcon } from './Icon';
import Button from './Button';
import ModalPage from './ModalPage';

const Form = styled.form`
  margin: 0 auto;
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

Form.Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.large} 0;

  svg {
    width: 1.2rem;
    margin-right: ${({ theme }) => theme.spacing.medium};
  }

  h2 {
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 3.6rem;
    margin: 0;
  }
`;

Form.Input = styled.div`
  width: 48%;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

Form.Button = styled.div`
  position: absolute;
  right: 0;
  bottom: -5rem;
`;

const NaverForm = (props) => {
  const [name, setName] = useState(props.name || '');
  const [role, setRole] = useState(props.role || '');
  const [age, setAge] = useState(props.age || '');
  const [companyTime, setCompanyTime] = useState(props.companyTime || '');
  const [projects, setProjects] = useState(props.projects || '');
  const [photoUrl, setPhotoUrl] = useState(props.photoUrl || '');

  return (
    <Form>
      <ModalPage
        title="Excluir Naver"
        description="Tem certeza que deseja excluir este Naver?"
      />
      <Form.Header>
        <BackIcon />
        <h2>{props.name ? 'Editar Naver' : 'Adicionar Naver'}</h2>
      </Form.Header>
      <Form.Input>
        <Input
          placeholder="Nome"
          label="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Input>
      <Form.Input>
        <Input
          placeholder="Cargo"
          label="Cargo"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </Form.Input>
      <Form.Input>
        <Input
          placeholder="Idade"
          label="Idade"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </Form.Input>
      <Form.Input>
        <Input
          placeholder="Tempo de Empresa"
          label="Tempo de Empresa"
          value={companyTime}
          onChange={(e) => setCompanyTime(e.target.value)}
        />
      </Form.Input>
      <Form.Input>
        <Input
          placeholder="Projetos que participou"
          label="Projetos que participou"
          value={projects}
          onChange={(e) => setProjects(e.target.value)}
        />
      </Form.Input>
      <Form.Input>
        <Input
          placeholder="URL da foto do Naver"
          label="URL da foto do Naver"
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
        />
      </Form.Input>
      <Form.Button>
        <Button>Salvar</Button>
      </Form.Button>
    </Form>
  );
};

export default NaverForm;
