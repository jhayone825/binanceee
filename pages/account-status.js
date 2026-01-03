export default function AccountStatus() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
      <div class="modal">
        <div class="icon">!</div>
        <div class="title">Account Suspended</div>
        <div class="message">
          Your account has been temporarily suspended due to unusual activity.
          Please contact support for further assistance.
        </div>
        <div class="support">+44‑400‑123‑4567</div>
        <button onclick="window.history.back()">Close</button>

        <style>
        body{margin:0;font-family:Arial,sans-serif;background:#1E1E1E;color:#fff;display:flex;justify-content:center;align-items:center;min-height:100vh;padding:20px}
        .modal{background:#2B2B2B;border-radius:16px;padding:30px;max-width:380px;width:100%;text-align:center;border:1px solid #444}
        .icon{width:64px;height:64px;border-radius:50%;background:#F0B90B;display:flex;align-items:center;justify-content:center;font-size:32px;margin:0 auto 20px;color:#1E1E1E;font-weight:bold}
        .title{font-size:22px;font-weight:bold;margin-bottom:12px}
        .message{font-size:14px;color:#CCC;line-height:1.5;margin-bottom:20px}
        .support{font-size:18px;font-weight:bold;color:#F0B90B;background:rgba(240,185,11,0.1);padding:14px;border-radius:10px;border:1px solid rgba(240,185,11,0.3);margin-bottom:25px}
        button{width:100%;padding:12px;border:none;border-radius:25px;background:#F0B90B;color:#1E1E1E;font-size:16px;font-weight:bold;cursor:pointer}
        button:hover{opacity:.9}
        </style>
      </div>
    `}} />
  )
}
