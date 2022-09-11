import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            title="Diga não ao Medium: tenha sua própria plataforma"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies aliquam, nunc nisl aliquet nisl, eget aliquet nisl lorem eu nunc. Sed euismod, nisl vel ultricies aliquam, nunc nisl aliquet nisl, eget aliquet nisl lorem eu nunc."
            author={{
              name: 'Daniel Versoza',
              role: 'Backend Software Engineer'
            }} />
          <Post
            title="Diga não ao Medium: tenha sua própria plataforma"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies aliquam, nunc nisl aliquet nisl, eget aliquet nisl lorem eu nunc. Sed euismod, nisl vel ultricies aliquam, nunc nisl aliquet nisl, eget aliquet nisl lorem eu nunc."
            author={{
              name: 'Daniel Versoza',
              role: 'Backend Software Engineer'
            }} />
          <Post
            title="Diga não ao Medium: tenha sua própria plataforma"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies aliquam, nunc nisl aliquet nisl, eget aliquet nisl lorem eu nunc. Sed euismod, nisl vel ultricies aliquam, nunc nisl aliquet nisl, eget aliquet nisl lorem eu nunc."
            author={{
              name: 'Daniel Versoza',
              role: 'Backend Software Engineer'
            }} />
        </main>
      </div>
    </div >
  );
}
