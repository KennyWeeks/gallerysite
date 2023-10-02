interface ArrowButtonsInterface {
    orientation?: string,
    hovereffect?: boolean,
    position?: string /*This can only be top or down, so this will determine where the border radius will be*/
}

const ArrowBlocks : React.FC<ArrowButtonsInterface> = ({orientation, hovereffect, position}) => {
    return(
        <div className={"w-[50px] h-[50px] bg-offwhite"}></div>
    );
}

export default ArrowBlocks;