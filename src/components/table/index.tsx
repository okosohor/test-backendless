import { useParams } from "react-router-dom";
import tabs from '../../data';
import './table.scss';



export const Table: React.FC = () => {
  const { id } = useParams();
  
    const title = tabs.find(tab => tab.id === id)?.title || 'No results';

  const [word1, word2] = title.split(' ')
  return (
    <table className='table'>
      <tr className='table__row'>
        <td className='table__cell'>{word1}</td>
        <td className='table__cell'>{word2}</td>
      </tr>
    </table>
  );
};
