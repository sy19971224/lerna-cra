export const PreviewVideo = () => {
  return (
        <div style={{ backgroundColor: '#1a1b1d' }}>
            <video src={require('../../static/media/test.mp4')} controls/>
        </div>
  )
}
