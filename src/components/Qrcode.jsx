import QRCode from 'qrcode'
import { useState } from 'react'
import { Button } from '@mui/material'
function Qrcode() {
	const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 800,
			margin: 2,
			color: {
				// dark: '#335383FF',
				// light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}

	return (
		<div className="app">
			<h1>QR Generator</h1>
			<input 
				type="text"
				placeholder="e.g. https://google.com"
				value={url}
				onChange={e => setUrl(e.target.value)} />
			<Button variant="contained" onClick={GenerateQRCode}>Generate</Button>
			{qr && <>
				<img src={qr} />
                <Button variant='contained' color='success' href={qr} download="qrcode.png">Download</Button>
			</>}
		</div>
	)
}

export default Qrcode
