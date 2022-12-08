export default function ItemImgCart(props) {
    const ip = "http://localhost:8080"
    return (
        <img
            src={ip + `/${props.files[0].filePath}`}
            alt=""
            width="100px"
            height="140px"
        />
    )
}