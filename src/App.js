import './App.css';
import ArticleList from './components/ArticlesList/ArticleList';
import studentsListData from './data/students-list-data';
import StudentsList from './components/StudentsList/StudentsList';
import Subtitle from './components/Subtitle/Subtitle';
import Title from './components/Title/Title';

function App() {
  return (
    <>
      <Title text="Students" />
      <Subtitle text="Number of students:" lengthValue={studentsListData.length} />
      <StudentsList />
      <Title text="Blog articles" />
      <ArticleList />
    </>
  );
}

export default App;
