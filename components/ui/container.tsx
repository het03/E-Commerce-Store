interface ContainerProps{
    children: React.ReactNode;
}

const Conatainer: React.FC<ContainerProps> = ({
    children
}) => {
    return ( 
        <div className="mx-auto max-w-7xl">
            {children}
        </div>
     );
}
 
export default Conatainer;