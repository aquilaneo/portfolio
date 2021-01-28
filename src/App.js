import {Container, Row, Col} from 'react-bootstrap';

import "./common.css";
import "./bootstrap/bootstrap.min.css";
import Icon from "./img/Icon.png";
import GitHubLogo from "./img/GitHub_Logo.png";
import QiitaLogo from "./img/Qiita_Logo.png";
import AboutMe from "./img/About_me.png";
import Activities from "./img/Activities.png";
import Skills from "./img/Skills.png";
import Works from "./img/Works.png";
import Researches from "./img/Researches.png";
import Extra from "./img/Extra.png";
import Satellite from "./img/Satellite.png";
import Education from "./img/Education.png";
import Web from "./img/Web.png";
import Libraries from "./img/Libraries.png";
import Game from "./img/Game.png";
import Other from "./img/Other.png";

function App () {
	return (
		<Container className={"container"}>
			<div className={"space"}>
				<div className={"inner-div"}>
					<h1 className={"subtitle"}>Takumi's portfolio</h1>
					<div>

					</div>
				</div>
			</div>

			<div className={"space"}>
				<div className={"inner-div"}>
					<h2 className={"subtitle"}><img src={AboutMe} alt={"About me"} className={"icon"}/>About me</h2>
					<Row>
						<Col sm={4} style={{textAlign: "center"}}>
							<img src={Icon} alt={"アイコン"} style={{maxWidth: "100%", maxHeight: "100%",}}/>
						</Col>
						<Col sm={8}>
							<h3>Takumi</h3>
							<div>
								<p> 首都圏在住の大学院生です。趣味は離島めぐりやゲームです。</p>
								<p>
									コロナ禍で旅行に行けなくなり寂しくなりましたが、コロナ明け後は日本一の秘境とも言われる伊豆諸島の青ヶ島に行きたいと思っています。
									好きなゲームはFinal
									Fantasyシリーズで、「こんなすごいゲームを創ってみたい！」という想いでプログラミングを勉強し始めるきっかけになったゲームでもあります。
								</p>
								<p>
									そんなことからIT/プログラミングとの出会いはゲーム開発から始まり、デスクトップアプリ開発なども体験しつつ現在はWebフロントエンド系技術に触れることが多いです。
									大学で所属している団体やアルバイトでは組み込み開発やプログラミング教育に関わっていたりもします。
								</p>
							</div>
							<div style={{textAlign: "center"}}>
								<a href={"https://github.com/aquilaneo"}>
									<img src={GitHubLogo} alt={"GitHub"} className={"logo"}/>
								</a>
								<a href={"https://qiita.com/aquilaneo"}>
									<img src={QiitaLogo} alt={"Qiita"} className={"logo"}/>
								</a>
							</div>
						</Col>
					</Row>
				</div>
			</div>

			<div className={"space"}>
				<div className={"inner-div"}>
					<h2 className={"subtitle"}><img src={Activities} alt={"Activities"} className={"icon"}/>Activities
					</h2>
					<Row>
						<Col sm={6} style={{marginBottom: "2rem"}}>
							<div className={"panel"}>
								<h4><img src={Researches} alt={"Researches"} className={"icon-small"}/>Researches</h4>
								<ul>
									<li>学部3, 4年次は宇宙航空研究開発機構(JAXA)相模原キャンパスでレーダーと画像を用いた火星地下空洞の調査に関する研究を行う。</li>
									<li>大学院進学後は理工系学部生向けの並列プログラミング学習ツールの開発を研究テーマとしている。</li>
								</ul>
							</div>
						</Col>
						<Col sm={6} style={{marginBottom: "2rem"}}>
							<div className={"panel"}>
								<h4><img src={Extra} alt={"Extra Activity"} className={"icon-small"}/>Extra Activity
								</h4>
								<ul>
									<li>主専攻の研究とは別に、学部2年次から課外活動として東海大学情報教育センターの「ICT特定プログラム」に所属し、情報教育センターの研究室でロボット対戦ゲームをテーマとしたプログラミング学習環境を開発。</li>
								</ul>
							</div>
						</Col>
					</Row>
					<Row>
						<Col sm={6} style={{marginBottom: "2rem"}}>
							<div className={"panel"}>
								<h4><img src={Satellite} alt={"Satellite Project"} className={"icon-small"}/>Satellite
									Project</h4>
								<ul>
									<li>東海大学衛星プロジェクト(TSP)に所属。学部2年次には3人のチームで模擬人工衛星を開発し能代宇宙イベントに出場。学部3年次には団体内の教育カリキュラムを新規に整備し、1,
										2年生の教育を担当する。学部4年次には学生代表を務める。以降は団体で採用するマイコンの変更やGitを使用した団体内の技術ドキュメント管理体制の構築を行う。
									</li>
								</ul>
							</div>
						</Col>
						<Col sm={6} style={{marginBottom: "2rem"}}>
							<div className={"panel"}>
								<h4><img src={Education} alt={"Education"} className={"icon-small"}/>Education</h4>
								<ul>
									<li>LEGO社製のロボット教材を使用した子供向け教室でアルバイト。小学1年生から高校生まで幅広い年齢層の生徒を指導(ビジュアルプログラミング環境/C言語/Pythonを使用)。所属する教室の生徒で構成されるチームがFirst
										LEGO Leagueの世界大会に出場決定。
									</li>
								</ul>
							</div>
						</Col>
					</Row>
				</div>
			</div>

			<div className={"space"}>
				<div className={"inner-div"}>
					<h2 className={"subtitle"}><img src={Skills} alt={"Skills"} className={"icon"}/>Skills</h2>
					<Row>
						<Col sm={6} style={{marginBottom: "2rem"}}>
							<div className={"panel"}>
								<h4><img src={Web} alt={"Web"} className={"icon-small"}/>Web</h4>
								<ul>
									<li>HTML5/CSS3</li>
									<li>JavaScript ES6</li>
									<li>TypeScript</li>
								</ul>
							</div>
						</Col>
						<Col sm={6} style={{marginBottom: "2rem"}}>
							<div className={"panel"}>
								<h4><img src={Libraries} alt={"Libraries"} className={"icon-small"}/>Libraries</h4>
								<ul>
									<li>React</li>
									<li>Electron</li>
									<li>three.js</li>
									<li>Blockly</li>
								</ul>
							</div>
						</Col>
					</Row>
					<Row>
						<Col sm={6} style={{marginBottom: "2rem"}}>
							<div className={"panel"}>
								<h4><img src={Game} alt={"Game/Desktop"} className={"icon-small"}/>Game/Desktop</h4>
								<ul>
									<li>Unity</li>
									<li>C#</li>
								</ul>
							</div>
						</Col>
						<Col sm={6} style={{marginBottom: "2rem"}}>
							<div className={"panel"}>
								<h4><img src={Other} alt={"Other"} className={"icon-small"}/>Other</h4>
								<ul>
									<li>Python</li>
									<li>C/C++</li>
								</ul>
							</div>
						</Col>
					</Row>
				</div>
			</div>

			<div className={"space"}>
				<div className={"inner-div"}>
					<h2 className={"subtitle"}><img src={Works} alt={"Works"} className={"icon"}/>Works</h2>
					<div>

					</div>
				</div>
			</div>
		</Container>
	);
}

export default App;
