import myAvatar from './assets/images/avatar.jpeg';
import reactLogo from './assets/icons/react-logo.svg';
import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      <h3>{process.env.AUTHOR_NAME}</h3>
      <p>Hello from react app webpack</p>
      <img src={myAvatar} alt="my-avatar" />

      <h3>My avatar from public folder</h3>
      <img src="/assets/avatar.jpeg" alt="" />

      <img width="200px" src={reactLogo} alt="react-logo" />
      <Counter />
    </div>
  );
};

export default App;
