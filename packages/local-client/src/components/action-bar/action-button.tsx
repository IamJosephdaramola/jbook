interface ActionButtonProps {
	onClick: () => void;
	title: string;
	icon: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
	onClick,
	title,
	icon,
}) => {
	return (
		<button
			title={title}
			type='button'
			onClick={onClick}
			className='button is-primary is-small'>
			<span>
				<i className={icon}></i>
			</span>
		</button>
	);
};

export default ActionButton;
