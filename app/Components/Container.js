const Container = ({ children }) => {
    return (
        <div className='w-full max-w-[1240px] mx-auto px-5 md:px-10 relative'>
            {children}
        </div>
    );
};
export default Container;