import { useEffect } from 'react';
import { fetchUserAttributes } from 'aws-amplify/auth';

interface Props {
  setUserEmail: React.Dispatch<React.SetStateAction<string | null>>;
}

const UserEmail: React.FC<Props> = ({ setUserEmail }) => {
  useEffect(() => {
    handleFetchUserAttributes();
  }, []);

  async function handleFetchUserAttributes() {
    try {
      const userAttributes = await fetchUserAttributes();
      setUserEmail(userAttributes.email || null);
    } catch (err) {
      console.log(err);
    }
  }

  return null;
};

export default UserEmail;
