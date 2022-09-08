
const GoogleMap = () => {
    return(
        <div style={{
            position:"relative",
            textAlign:"right",
            height:"450px",
            width:"400px"
        }}>
            <div style={{
                overflow:"hidden",
                background:"none!important",
                height:"450px",
                width:"400px"
            }}>
                <iframe title="location" width="400" height="450" id="gmap_canvas" src="https://maps.google.com/maps?q=Baia%20Mare,%20Str.Vasile%20Alecsandri&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                    </iframe>
            </div>
        </div>
    )
}

export default GoogleMap;