

export function EmptyImage(width, height) {
  return (
    <div style={{
      display: "flex",
      justifyContent: 'center',
      alignItems: "center",
      width: width ? width : "100%",
      height: height ? height : "250px",
      border: "1px solid #ccc"
    }}>Image</div>
  )
}

