import Nav from './components/Nav';

export default function Layout({ children }: any) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
