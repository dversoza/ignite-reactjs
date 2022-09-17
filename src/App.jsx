import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      name: 'Daniel Versoza',
      role: 'Backend Software Engineer',
      avatarUrl: "https://github.com/dversoza.png"
    },
    content: [
      { type: 'paragraph', text: "lorem ipsum dolor sit amet" },
      { type: 'paragraph', text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ullam impedit ipsum minima voluptatibus soluta tempora quis, libero sequi." },
      { type: 'paragraph', text: "Natus similique veniam suscipit aperiam doloribus? Maxime laboriosam ex accusamus vitae." },
      { type: 'tag', text: "#cool" },
      { type: 'tag', text: "#awesome" },
      { type: 'tag', text: "#react" }
    ],
    publishedAt: new Date("1997-05-15 20:30"),
  },
  {
    id: 2,
    author: {
      name: 'Matheus Valentim',
      role: 'Um estudante de engenharia civil voltando a estudar a área que sempre fez o olho brilhar.',
      avatarUrl: "https://github.com/valentimm.png"
    },
    content: [
      { type: 'paragraph', text: "lorem ipsum dolor sit amet" },
      { type: 'paragraph', text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ullam impedit ipsum minima voluptatibus soluta tempora quis, libero sequi." },
      { type: 'paragraph', text: "Natus similique veniam suscipit aperiam doloribus? Maxime laboriosam ex accusamus vitae." },
      { type: 'tag', text: "#cool" },
      { type: 'tag', text: "#awesome" },
      { type: 'tag', text: "#react" }
    ],
    publishedAt: new Date("1998-10-30 20:30"),
  },
  {
    id: 3,
    author: {
      name: 'Felipe Alves Barboza',
      role: 'Computer Engineering student. Passionate about programming',
      avatarUrl: "https://github.com/felbarboza.png"
    },
    content: [
      { type: 'paragraph', text: "lorem ipsum dolor sit amet" },
      { type: 'paragraph', text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ullam impedit ipsum minima voluptatibus soluta tempora quis, libero sequi." },
      { type: 'paragraph', text: "Natus similique veniam suscipit aperiam doloribus? Maxime laboriosam ex accusamus vitae." },
      { type: 'tag', text: "#cool" },
      { type: 'tag', text: "#awesome" },
      { type: 'tag', text: "#react" }
    ],
    publishedAt: new Date("1999-12-03 20:30"),
  }
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => (
            <Post key={post.id} {...post} />
          ))}
        </main>
      </div>
    </div >
  );
}
