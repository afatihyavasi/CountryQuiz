import './index.css';

const Option = ({children,bg,truthy,handleClick}) => {

    return (
        <div className='option'>
            <button className={truthy ? bg : ''} onClick={handleClick}>{children}</button>
        </div>
    );
};

export default Option;
