import './add-cell.css';
import AddCellButton from './add-cell-button';
import { useActions } from '../../hooks/use-actions';

interface AddCellProps {
	previousCellId: string | null;
	forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ previousCellId, forceVisible }) => {
	const { insertCellAfter } = useActions();
	return (
		<div className={`add-cell ${forceVisible && 'force-visible'}`}>
			<div className='add-buttons'>
				<AddCellButton
					title='Code'
					onClick={() => insertCellAfter(previousCellId, 'code')}
				/>
				<AddCellButton
					title='Text'
					onClick={() => insertCellAfter(previousCellId, 'text')}
				/>
			</div>
			<div className='divider'></div>
		</div>
	);
};

export default AddCell;
