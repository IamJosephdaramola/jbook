import './action-bar.css';
import { useActions } from '../../hooks/use-actions';
import ActionButton from './action-button';

interface ActionBarProps {
	id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
	const { moveCell, deleteCell } = useActions();

	return (
		<div className='action-bar'>
			<ActionButton
				title='Move cell up'
				icon='fas fa-arrow-up'
				onClick={() => moveCell(id, 'up')}
			/>
			<ActionButton
				title='Move cell down'
				icon='fas fa-arrow-down'
				onClick={() => moveCell(id, 'down')}
			/>
			<ActionButton
				title='Delete cell'
				icon='fas fa-times'
				onClick={() => deleteCell(id)}
			/>
		</div>
	);
};

export default ActionBar;
