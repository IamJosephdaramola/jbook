interface AddCellButtonProps {
	title: string;
	onClick: () => void;
}

const AddCellButton: React.FC<AddCellButtonProps> = ({ title, onClick }) => {
	return (
		<button
			onClick={onClick}
			type='button'
			className='button is-rounded is-primary is-small'>
			<span className='icon is-small'>
				<i className='fas fa-plus'></i>
			</span>
			<span>{title}</span>
		</button>
	);
};

export default AddCellButton;
