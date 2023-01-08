// import { useEffect } from 'react';
import './code-cell.css';
import CodeEditor from '../code-editor/code-editor';
import Preview from '../preview/preview';
import Resizable from '../resizable/resizable';
import { Cell } from '../../state';
import { useTypedSelector, useCumulativeCode, useActions } from '../../hooks';

interface CodeCellProps {
	cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
	const { updateCell, createBundle } = useActions();
	const bundle = useTypedSelector((state) => state.bundles[cell.id]);
	const cumulativeCode = useCumulativeCode(cell.id);

	// useEffect(() => {
	// 	if (!bundle) {
	// 		createBundle(cell.id, cumulativeCode);
	// 		return;
	// 	}
	// 	const timer = setTimeout(async () => {
	// 		createBundle(cell.id, cumulativeCode)
	// 	}, 1000);
	// 	return () => {
	// 		clearTimeout(timer);
	// 	};
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [cumulativeCode, cell.id, createBundle]);

	const handleBundleCode = async () => {
		createBundle(cell.id, cumulativeCode);
	};

	const renderPreview = () => {
		if (!bundle) {
			return null;
		}
		if (bundle.loading) {
			return (
				<div className='progress-cover'>
					<progress
						className='progress is-small is-primary'
						max='100%'>
						Loading
					</progress>
				</div>
			);
		}

		return <Preview code={bundle.code} err={bundle.err} />;
	};

	return (
		<Resizable direction='vertical'>
			<div
				style={{
					height: 'calc(100% - 10px)',
					display: 'flex',
					flexDirection: 'row',
				}}>
				<Resizable direction='horizontal'>
					<CodeEditor
						initialValue={cell.content}
						onChange={(value) => updateCell(cell.id, value)}
						handleBundleCode={handleBundleCode}
					/>
				</Resizable>
				<div className='preview-wrapper'>
					{bundle && renderPreview()}
				</div>
			</div>
		</Resizable>
	);
};

export default CodeCell;
