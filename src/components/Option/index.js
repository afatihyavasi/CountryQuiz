
import './index.css';

const Option = ({handleClick,children,bg,truthy}) => {




    return (
        <div className='option'>
            <button className={truthy ? bg : ''} onClick={handleClick}>{children}</button>
        </div>
    );
};

export default Option;
