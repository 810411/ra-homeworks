const FontSelector = ({fonts, selectedFont, onSelect}) => {
  const pictureFontList = fonts.map(({name, path}) => {
    return (
      <div className="grid center font-item">
        <input
          type="radio"
          name="font"
          value={name}
          id={name}
          checked={selectedFont}
          onChange={event => onSelect(fonts.filter(font => font.name === event.target.value)[0])}
        />
        <label htmlFor={name} className="grid-1">
          <PictureFont path={path} text={name.slice(0, 3)}/>
        </label>
      </div>
    )
  });

  return (
    <div className="font-picker">
      {pictureFontList}
    </div>

  )
};
