const amplifyCustomFields = {
  signIn: {
    username: {
      label: 'Email',
      placeholder: '이메일을 입력해주세요.',
    },
    password: {
      placeholder: '비밀번호를 입력해주세요.',
    },
  },
  signUp: {
    username: {
      label: 'Email',
      placeholder: '이메일을 입력해주세요.',
    },
    password: {
      placeholder: '비밀번호를 입력해주세요.',
    },
    confirm_password: {
      label: 'Confirm Password',
      placeholder: '비밀번호를 다시 한 번 더 입력해주세요.',
    },
    nickname: {
      order: 1,
      placeholder: '사용할 닉네임을 입력해주세요.',
    },
  },
  forgotPassword: {
    username: {
      label: 'Email',
      placeholder: '이메일을 입력해주세요.',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: '인증번호를 입력해주세요.',
      isRequired: false,
    },
    password: {
      label: 'New Password',
      placeholder: '새로운 비밀번호를 입력해주세요.',
    },
    confirm_password: {
      placeholder: '비밀번호를 다시 한 번 더 입력해주세요.',
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};

export default amplifyCustomFields;
