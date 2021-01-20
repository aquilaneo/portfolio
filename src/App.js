import "./common.css"
import Icon from "./img/Icon.png"
import GitHubLogo from "./img/GitHub_Logo.png"
import QiitaLogo from "./img/Qiita_Logo.png"

function App () {
	return (
		<div>
			<div className={"space"}>
				<div className={"center"}>
					<h1 className={"subtitle"}>Takumi's portfolio</h1>
					<div>

					</div>
				</div>
			</div>

			<div className={"space"}>
				<div className={"center"}>
					<h2 className={"subtitle"}>About me</h2>
					<table>
						<tbody>
						<tr>
							<td>
								<img src={Icon} style={{height: "100%", padding: "2rem"}} alt={"アイコン"}/>
							</td>
							<td>
								<div id={"about-me"}>
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
								</div>
							</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div className={"space"}>
				<div className={"center"}>
					<h2 className={"subtitle"}>Activities</h2>
					<ul>
						<li>学部3, 4年次は宇宙航空研究開発機構(JAXA)相模原キャンパスでレーダーと画像を用いた火星地下空洞の調査に関する研究を行う。</li>
						<li>大学院進学後は理工系学部生向けの並列プログラミング学習ツールの開発を研究テーマとしている。</li>
						<li>主専攻の研究とは別に、学部2年次から課外活動として東海大学情報教育センターの「ICT特定プログラム」に所属し、情報教育センターの研究室でロボット対戦ゲームをテーマとしたプログラミング学習環境を開発。</li>
						<li>東海大学衛星プロジェクト(TSP)に所属。学部2年次には3人のチームで模擬人工衛星を開発し能代宇宙イベントに出場。学部3年次には団体内の教育カリキュラムを新規に整備し、1,
							2年生の教育を担当する。学部4年次には学生代表を務める。以降は団体で採用するマイコンの変更やGitを使用した団体内の技術ドキュメント管理体制の構築を行う。
						</li>
						<li>LEGO社製のロボット教材を使用した子供向け教室でアルバイト。小学1年生から高校生まで幅広い年齢層の生徒を指導(ビジュアルプログラミング環境/C言語/Pythonを使用)。所属する教室の生徒で構成されるチームがFirst
							LEGO Leagueの世界大会に出場決定。
						</li>
					</ul>
				</div>
			</div>

			<div className={"space"}>
				<div className={"center"}>
					<h2 className={"subtitle"}>History</h2>
					<div>

					</div>
				</div>
			</div>

			<div className={"space"}>
				<div className={"center"}>
					<h2 className={"subtitle"}>Skills</h2>
					<div>
						<div>Web: HTML5/CSS3/JavaScript ES6/TypeScript</div>
						<div>Game: Unity/C#</div>
						<div>Other: Python/C++</div>
					</div>
				</div>
			</div>

			<div className={"space"}>
				<div className={"center"}>
					<h2 className={"subtitle"}>Works</h2>
					<div>

					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
