// func init_wid()
// {
//     var server_id=document.getElementById("dis_server").value;
//     var channel_id=document.getElementById("dis_channel").value;
    
//     document.write(<widgetbot
//   server = server_id
//   channel= channel_id
//   width="800"
//   height="600"
// ></widgetbot>)
// <script src="https://cdn.jsdelivr.net/npm/@widgetbot/html-embed"></script>
// }

type url = string

interface Attributes {
  // Server + channel IDs
  server: string
  channel?: string

  // The height and width. You can specify a number to
  // use pixels or use CSS units eg. 100%
  width?: number | string
  height?: number | string

  // Connect to a custom WidgetBot server (Only set this if you are explicitly told to)
  shard?: url
}

export default Attributes