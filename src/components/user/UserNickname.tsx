import { useEffect } from 'react';
import { fetchUserAttributes } from 'aws-amplify/auth';

interface Props {
  setUserNickname: React.Dispatch<React.SetStateAction<string | null>>;
}

const UserNickname: React.FC<Props> = ({ setUserNickname }) => {
  useEffect(() => {
    handleFetchUserAttributes();
  }, []);

  async function handleFetchUserAttributes() {
    try {
      const userAttributes = await fetchUserAttributes();
      console.log(userAttributes);
      setUserNickname(userAttributes.nickname || null);
    } catch (err) {
      console.log(err);
    }
  }

  return null;
};

export default UserNickname;
