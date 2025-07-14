import { Flex } from 'antd';
import { LoginForm } from '../components/login-form';
import styles from '../styles/components/login-form.module.scss';

export default function LoginPage() {
  return (
    <Flex className={styles.login} gap="middle" vertical>
      <LoginForm />
    </Flex>
  );
};

