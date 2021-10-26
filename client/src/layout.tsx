import AddBtn from './components/AddBtn';
import Nav from './components/Nav';

export default function Layout({ children }: any) {
  return (
    <>
      <Nav />
      <AddBtn />
      {children}
    </>
  );
}
