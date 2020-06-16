(this["webpackJsonppomodoro-app"]=this["webpackJsonppomodoro-app"]||[]).push([[0],{132:function(e,t,a){e.exports=a.p+"static/media/switch.a3778d58.mp3"},138:function(e,t,a){e.exports=a(311)},310:function(e,t,a){},311:function(e,t,a){"use strict";a.r(t);a(139);var o=a(0),n=a.n(o),r=a(8),s=a.n(r),l=a(20),c=a(21),i=a(59),u=a(25),m=a(24),d=a(66),p=a(136),h=n.a.createElement(d.a,{id:"popover-basic"},n.a.createElement(d.a.Title,{as:"h3"},n.a.createElement("strong",null,"What is Pomodoro Technique?")),n.a.createElement(d.a.Content,{style:{fontSize:"1.1rem"}},"The Pomodoro Technique is a time management system that encourages people to work with the time they have rather than against it. You break your workday into 25-minute chunks separated by five-minute breaks. After about four pomodoros, you take a longer break of about 15 minutes."));var k=function(){return n.a.createElement(p.a,{trigger:["hover","focus"],placement:"bottom",overlay:h},n.a.createElement("h1",null,"Pomodoro Overload"))},f=a(129),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={background:"#FF0000"},e.handleChangeComplete=function(t){e.setState({background:t.hex}),document.body.style.backgroundColor=e.state.background},e}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"bg-comp"},n.a.createElement(f.GithubPicker,{color:this.state.background,onChangeComplete:this.handleChangeComplete}))}}]),a}(n.a.Component),S=a(9),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,!this.props.pomodoroRunning&&!this.props.onBreak&&n.a.createElement(S.a,{size:"lg",onClick:this.props.startPomdoro,variant:"secondary"},"Start Pomodoro "),this.props.pomodoroRunning&&n.a.createElement(S.a,{size:"lg",onClick:this.props.cancelPomodoro,variant:"secondary"},"Cancel Pomodoro "),!this.props.pomodoroRunning&&this.props.onBreak&&!this.props.pomodoroCompleted&&n.a.createElement(S.a,{size:"lg",onClick:this.props.shortBreakPomdoro,variant:"secondary"},"Short Break "),!this.props.pomodoroRunning&&this.props.pomodoroCompleted&&n.a.createElement(S.a,{size:"lg",onClick:this.props.longBreakPomdoro,variant:"secondary"},"Long Break "))}}]),a}(n.a.Component),E=a(47),y=a(26),b=a.n(y),T=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var o;return Object(l.a)(this,a),(o=t.call(this,e)).editTask=function(){o.setState({defaultTask:!1})},o.handleChange=function(e){o.setState({textValue:e.target.value})},o.storeTaskLocalStorage=function(e){o.props.addTaskArr(e),b.a.set("pomodoroTasks",o.props.taskArr)},o.changeTask=function(){""===o.state.textValue?(o.setState({task:"Focus is the Key."}),o.setState({defaultTask:!0}),o.setState({textValue:""})):o.state.textValue.length>100?(alert("Please enter a maximum of 100 characters"),o.setState({task:"Focus is the Key."}),o.setState({defaultTask:!0}),o.setState({textValue:""})):(o.setState({task:o.state.textValue}),o.storeTaskLocalStorage(o.state.textValue),o.setState({defaultTask:!0}),o.setState({textValue:""}))},o.state={task:"Focus is the Key.",defaultTask:!0,textValue:""},o}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement(E.a,{className:"bg-dark text-white card-task",style:{width:"20rem"}},n.a.createElement(E.a.Header,null,"Task:"),n.a.createElement(E.a.Body,null,n.a.createElement(E.a.Text,{className:"text-task"},this.state.task),n.a.createElement("form",null,!this.state.defaultTask&&n.a.createElement("textarea",{value:this.state.textValue,onChange:this.handleChange,style:{marginBottom:"15px"}})),this.state.defaultTask?n.a.createElement(S.a,{variant:"light",onClick:this.editTask,className:"task-btn"},"Edit Task"):n.a.createElement(S.a,{variant:"light",onClick:this.changeTask,className:"task-btn"},"Change")))}}]),a}(n.a.Component),C=a(130),B=a(131),P=a.n(B),w=a(132),O=a.n(w),R=new P.a(O.a,{volume:1,throttleMs:40}),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).playAudio=function(){R.play(.1)},e}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"timer"},n.a.createElement(C.a,{key:this.props.date,ref:this.props.myRef,date:this.props.date,daysInHours:!0,autoStart:!1,onTick:this.playAudio,onComplete:this.props.completedPomdoro}))}}]),a}(n.a.Component),x=a(137),A=a(32),D=a(11),L=a(65);var N=function(e){var t=n.a.useState(!1),a=Object(A.a)(t,2),o=a[0],r=a[1],s=n.a.useState(0),l=Object(A.a)(s,2),c=l[0],i=l[1],u=n.a.useState(0),m=Object(A.a)(u,2),d=m[0],p=m[1],h=n.a.useState(0),k=Object(A.a)(h,2),f=k[0],g=k[1],v=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return!(!t.every((function(e){return"number"===typeof e}))||!t.every((function(e){return e>0&&e<121})))},E=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var o=t.map((function(e){return 6e4*e}));return o};return n.a.createElement("div",null,n.a.createElement(S.a,{className:"setting-btn",variant:"outline-dark",size:"sm",onClick:function(){return r(!0)}},"Settings"),n.a.createElement(D.a,{show:o,onHide:function(){return r(!1)}},n.a.createElement(D.a.Header,{closeButton:!0},n.a.createElement(D.a.Title,null,"Pomodoro Timer Settings")),n.a.createElement(D.a.Body,null,n.a.createElement("h5",null,"Enter how many minutes:"),n.a.createElement("br",null),n.a.createElement("p",null,"Main Timer:"),n.a.createElement(L.a,{value:c,onChange:i})),n.a.createElement(D.a.Body,null,n.a.createElement("p",null,"Short Break Timer:"),n.a.createElement(L.a,{value:d,onChange:p})),n.a.createElement(D.a.Body,null,n.a.createElement("p",null,"Long Break Timer:"),n.a.createElement(L.a,{value:f,onChange:g})),n.a.createElement(D.a.Footer,null,n.a.createElement(S.a,{variant:"secondary",onClick:function(){r(!1),e.editTimerDefault()}},"Default Settings"),n.a.createElement(S.a,{variant:"primary",onClick:function(){if(r(!1),v(c,d,f)){var t=E(c,d,f);e.editTimer.apply(e,Object(x.a)(t))}else alert("Enter a valid number"),e.editTimerDefault()}},"Save Changes"))))};var V=function(e){var t=Object(o.useState)(!1),a=Object(A.a)(t,2),r=a[0],s=a[1],l=function(){return s(!1)};return n.a.createElement("div",null,n.a.createElement(S.a,{className:"stats-btn",variant:"outline-dark",size:"sm",onClick:function(){return s(!0)}},"Stats"),n.a.createElement(D.a,{show:r,onHide:l,size:"sm",centered:!0},n.a.createElement(D.a.Header,{closeButton:!0},n.a.createElement(D.a.Title,null,"Pomodoro Stats")),n.a.createElement(D.a.Body,null,"Pomodoro Tasks:",n.a.createElement("ul",{className:"pomodoro-list-task"},function(){var e=b.a.get("pomodoroTasks");return null===e?n.a.createElement("li",null,"Focus is the key!"):e.map((function(e){return n.a.createElement("li",null,e)}))}()),n.a.createElement("br",null),null===b.a.get("pomodoroCount")?"Total Pomdoro: 0":"Total Pomdoro: ".concat(b.a.get("pomodoroCount"))),n.a.createElement(D.a.Footer,null,n.a.createElement(S.a,{variant:"secondary",onClick:function(){l(),e.resetLocalStorage()}},"Clear"))))},z=a(135);var F=function(e){var t=n.a.createElement(z.a,{animation:"grow"}),a=[];return n.a.createElement("div",{key:e.count,onDoubleClick:e.restartCount,style:{backgroundColor:"grey",width:"150px",height:"35px",margin:"auto",marginBottom:"10px",border:"2px solid black"}},function(e){for(var o=0;o<e;o++)a.push(t);return a}(e.count))},H=a(317),K=a(318),W=a(319),q=function(e){Object(u.a)(o,e);var t=Object(m.a)(o);function o(e){var r;return Object(l.a)(this,o),(r=t.call(this,e)).startPomdoro=function(){r.setState({pomodoroRunning:!0}),r.myRef.current.start()},r.cancelPomodoro=function(){4===r.state.count?(r.setState({count:0}),r.setState({pomodoroCompleted:!1}),r.setState({pomodoroRunning:!1}),r.setState({onBreak:!1}),r.myRef.current.pause(),r.setState({date:Date.now()+r.state.mainTimer})):(r.setState({pomodoroRunning:!1}),r.setState({onBreak:!1}),r.myRef.current.pause(),r.setState({date:Date.now()+r.state.mainTimer}))},r.completedPomdoro=function(){3!==r.state.count||r.state.onBreak?4===r.state.count?(r.setState({pomodoroRunning:!1}),r.setState({onBreak:!1}),r.setState({count:0}),r.setState({pomodoroCompleted:!1}),r.setState({date:Date.now()+r.state.mainTimer})):r.state.onBreak?(r.setState({pomodoroRunning:!1}),r.setState({date:Date.now()+r.state.mainTimer}),r.setState({onBreak:!1})):(r.setState({pomodoroRunning:!1}),r.setState({onBreak:!0}),r.setState({count:r.state.count+1}),r.setState({date:Date.now()+r.state.shortTimer}),r.updateLocalCountStorage()):(r.setState({pomodoroRunning:!1}),r.setState({onBreak:!0}),r.setState({count:r.state.count+1}),r.setState({pomodoroCompleted:!0}),r.setState({date:Date.now()+r.state.longTimer}),r.updateLocalCountStorage())},r.shortBreakPomdoro=function(){r.setState({pomodoroRunning:!0}),r.myRef.current.start()},r.longBreakPomdoro=function(){r.setState({pomodoroRunning:!0}),r.myRef.current.start()},r.restartCount=function(){alert("Pomdoro is reset!"),r.setState({count:0}),r.cancelPomodoro()},r.editTimer=function(e,t,a){r.setState({mainTimer:e}),r.setState({shortTimer:t}),r.setState({longTimer:a}),alert("Settings changed!"),r.setState({count:0}),r.cancelPomodoro()},r.editTimerDefault=function(){r.setState({mainTimer:15e5}),r.setState({shortTimer:3e5}),r.setState({longTimer:9e5}),alert("Settings are change to default!"),r.setState({count:0}),r.cancelPomodoro()},r.resetLocalStorage=function(){var e=a(26);r.setState({taskArr:[]}),e.clear(),e("pomodoroCount",0)},r.updateLocalCountStorage=function(){var e=b.a.get("pomodoroCount");e++,b.a.set("pomodoroCount",e)},r.addTaskArr=function(e){r.state.taskArr.push(e)},r.myRef=n.a.createRef(),r.start=r.start.bind(Object(i.a)(r)),r.state={count:0,pomodoroRunning:!1,pomodoroCompleted:!1,onBreak:!1,date:Date.now()+15e5,mainTimer:15e5,shortTimer:3e5,longTimer:9e5,taskArr:[]},r}return Object(c.a)(o,[{key:"start",value:function(){this.myRef.current.start()}},{key:"pause",value:function(){this.myRef.current.pause()}},{key:"isCompleted",value:function(){this.myRef.current.isCompleted()}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(H.a,{className:"text-center"},n.a.createElement(K.a,null,n.a.createElement(W.a,null,n.a.createElement(k,null),n.a.createElement(g,null),n.a.createElement(T,{addTaskArr:this.addTaskArr,taskArr:this.state.taskArr}),n.a.createElement(F,{count:this.state.count,restartCount:this.restartCount}),n.a.createElement(j,{completedPomdoro:this.completedPomdoro,myRef:this.myRef,date:this.state.date}),n.a.createElement(v,{pomodoroRunning:this.state.pomodoroRunning,pomodoroCompleted:this.state.pomodoroCompleted,startPomdoro:this.startPomdoro,cancelPomodoro:this.cancelPomodoro,shortBreakPomdoro:this.shortBreakPomdoro,longBreakPomdoro:this.longBreakPomdoro,onBreak:this.state.onBreak})))),n.a.createElement(N,{editTimer:this.editTimer,editTimerDefault:this.editTimerDefault}),n.a.createElement(V,{resetLocalStorage:this.resetLocalStorage}))}}]),o}(n.a.Component);a(310),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[138,1,2]]]);
//# sourceMappingURL=main.7c3d0f7b.chunk.js.map