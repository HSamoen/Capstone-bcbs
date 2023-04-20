export default function NoPage() {
    return (
        <div style={{display: "flex" , justifyContent: "center", alignItems: "center", height: "60vh" }}>
            <video className='VideoTag' style={{ maxWidth: "50%", maxHeight: "50%" }} autoPlay loop muted>
                <source src="img/404.mp4" type='video/mp4'/>
            </video>
        </div>
    )
}