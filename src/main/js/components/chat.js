import style from './chat.module.css'
import tabStyle from './tab.module.css'

const Chat = ({ messages }) => {
	const reorderedMessages = [...messages]
	reorderedMessages.reverse()
	return (
		<div className={tabStyle.content + " " + style.container}>
			<div dangerouslySetInnerHTML={{ __html: "<script>alert(0)</script>" }}></div>
			<div className={style.messageBox}>
				{messages.map(message => <Message message={message} />)}
			</div>
		</div>
	)
}

const Message = ({ message }) => (
	<div className={style.message}>
		<div className={style.nick}>{message.nick}</div>
		<div className={style.text} dangerouslySetInnerHTML={{__html: message.text}} />
	</div>
)

export default Chat
