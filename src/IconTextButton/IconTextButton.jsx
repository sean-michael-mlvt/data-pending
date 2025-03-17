function IconTextButton({icon, label}) {



    return (
        <button className="bg-dark text-light">
            <img src={`/${icon}.svg`} alt={label} />
            {label}
        </button>
    );

}

export default IconTextButton