// import React, { useState } from 'react';
// import './chatroom.css';

// const chatroom = () => {
 
// // 
//   const sendMessage = (e) => {
//     e.preventDefault();
//     if (input.trim()) {
//       // Add new message to the chat
//       setMessages([...messages, { text: input, time: new Date().toLocaleTimeString() }]);
//       setInput('');
//     }
//   };

//   return (
//     <div className="chat-room">
//       <div className="chat-messages">
//         {messages.map((message, index) => (
//           <div key={index} className="chat-message">
//             <span className="chat-time">{message.time}</span>
//             <span>{message.text}</span>
//           </div>
//         ))}
//       </div>
//       <form className="chat-form" onSubmit={sendMessage}>
//         <input
//           className="chat-input"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type your message..."
//         />
//         <button className="chat-send" type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default chatroom;

// import React, { useState } from 'react';

// function chatroom() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const handleSend = () => {
//     if (input.trim()) {
//       setMessages([...messages, { text: input, id: Date.now() }]);
//       setInput('');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ddd' }}>
//       <div style={{ height: '300px', overflowY: 'scroll', borderBottom: '1px solid #ddd', marginBottom: '10px' }}>
//         {messages.map((message) => (
//           <div key={message.id} style={{ padding: '5px', borderBottom: '1px solid #eee' }}>
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <div>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           style={{ width: 'calc(100% - 80px)', padding: '10px', boxSizing: 'border-box' }}
//         />
//         <button onClick={handleSend} style={{ width: '70px', padding: '10px' }}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

// export default chatroom;




// ----------------------------------------------------
// import React ,{Component} from 'react';
// import './chatroom.css';
// class chatroom extends Component {
//   constructor(props) {
//     super(props);



//     this.state = {
//       messages: [],
//       input: '',
//     };
//   }

//   handleSend = () => {
//     const { input, messages } = this.state;
//     if (input.trim()) {
//       this.setState({
//         messages: [...messages, { text: input, id: Date.now() }],
//         input: '',
//       });
//     }
//   };

//   handleChange = (e) => {
//     this.setState({ input: e.target.value });
//   };

//   render() {
//     const { messages, input } = this.state;
//     return (
//       <div style={{ maxWidth: '600px', margin: '0 auto', padding: '50px', border: '3px solid #ddd' }}>
//         <h1 style={{textAlign:'center'}}>Welcome to chatroom</h1>
//         <div style={{ height: '300px', padding:'15%',overflowY: 'scroll', borderBottom: '1px solid #ddd', marginBottom: '10px' }}>
//           {messages.map((message) => (
//             <div key={message.id} style={{ padding: '5px', borderBottom: '1px solid #eee' }}>
//               {message.text}
//             </div>
//           ))}
//         </div>
//         <div>
//           <input
//             type="text"
//             value={input}
//             onChange={this.handleChange}
//             style={{ width: 'calc(100% - 80px)', padding: '10px', boxSizing: 'border-box' }}
//           />
//           <button onClick={this.handleSend} style={{ width: '70px', padding: '10px' }}>
//             Send
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default chatroom;


