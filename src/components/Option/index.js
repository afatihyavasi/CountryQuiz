import './index.css';
import cn from 'classnames';

const Option = ({children, bg, truthy, handleClick}) => {


    return (
        <div className='options-container'>
            <button className={cn(truthy ? bg : '', 'option')} onClick={handleClick}>{children}</button>
        </div>
    );
};

export default Option;
