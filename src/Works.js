import CodeBattler from "./img/works/CodeBattler.jpg";
import CodeBattlerDetail from "./img/works/CodeBattler_detail.jpg";
import VirtualLander from "./img/works/VirtualLander.jpg";
import VirtualLanderDetail from "./img/works/VirtualLander_detail.jpg";
import USAT from "./img/works/U-SAT.jpg";
import USATDetail from "./img/works/U-SAT_detail.jpg";
import TSPHP from "./img/works/TSPHP.jpg";
import TSPHPDetail from "./img/works/TSPHP_detail.jpg";
import Questions from "./img/works/Questions.jpg";
import TRINEEditor from "./img/works/TRINEEditor.jpg";
import TRINEEditorDetail from "./img/works/TRINEEditor_detail.jpg";
import TRINE3D from "./img/works/TRINE3D.jpg";
import TRINE3DDetail from "./img/works/TRINE3D_detail.jpg";
import Portfolio from "./img/works/Portfolio.jpg";
import Tetris from "./img/works/Tetris.jpg";
import Poll from "./img/works/Pole.jpg";
import SolidBall from "./img/works/SOLID BALL.jpg";
import SolidBallDetail from "./img/works/SOLID BALL_detail.jpg";

export const works = [
	{
		name: "Code Battler",
		languages: "HTML5/CSS3/JavaScript ES6",
		libraries: "three.js/Blockly",
		image: CodeBattler,
		detailImage: CodeBattlerDetail,
		comment:
			<div>
				<div>
					ブロックを組み合わせて命令を作成するビジュアルプログラミング環境やJavaScriptでロボットのプログラムを作成し、
					ロボットをゴールへ導く、敵を倒すといった目標を達成していくプログラミング学習ツールです。
					Webアプリとしてブラウザ上で動作し、ロボットの動きは3Dグラフィックスで描画されます。
					また、2人のプレイヤーがそれぞれ同じ画面上でロボットのプログラムを作成し、対戦させるモードも搭載しています。
				</div>
				<div>
					ICT特定プログラムの卒業制作として開発した作品で、2019年度ICT特定プログラム最優秀賞を獲得しました。
				</div>
				<div className={"center"}>
					<a href={"https://aquilaneo.github.io/Code-Battler/tutorial1.html"}
					   target={"_blank"} rel={"noopener noreferrer"}>
						公開ページ
					</a>
				</div>
				<div className={"center"}>
					<a href={"https://github.com/aquilaneo/Code-Battler"} target={"_blank"} rel={"noopener noreferrer"}>
						GitHub
					</a>
				</div>
			</div>,
	},
	{
		name: "Virtual Lander",
		languages: "PICマイコン/C言語",
		libraries: "Unity/C#",
		image: VirtualLander,
		detailImage: VirtualLanderDetail,
		comment:
			<div>
				<div>
					PICマイコン・加速度センサ等を使用した専用コントローラーを傾けて画面上の小惑星着陸機の姿勢を制御し、
					目標の着陸地点に安全に軟着陸させる3Dゲームです。
					着陸時に着陸目標地点からの距離が表示されるので、他のプレイヤーと距離を競い合う遊び方も可能です。
				</div>
				<div>
					2016年度東海大学建学祭と2017年度能代宇宙イベントで一般向けに展示を行い、大好評をいただきました。
				</div>
				<div>
					なお、現在公開しているものは専用コントローラーではなくマウス操作で着陸機を操作できるようにしたバージョンです。
				</div>
				<div className={"center"}>
					<a href={"https://drive.google.com/file/d/1BdlwzUxsfR8UB_R96mSNjijKCuBJk2OZ/view?usp=sharing"}
					   target={"_blank"} rel={"noopener noreferrer"}>
						ダウンロードページ
					</a>
				</div>
			</div>,
	},
	{
		name: "U-SAT/U-Connect",
		languages: "Raspberry Pi/Python",
		libraries: "Unity/C#",
		image: USAT,
		detailImage: USATDetail,
		comment:
			<div>
				<div>
					東海大学学生ロケットプロジェクト(TSRP)が開発したハイブリッドロケットに搭載し、
					高度数百メートルで放出される模擬人工衛星「U-SAT」とその管制アプリケーション「U-Connect」です。
				</div>
				<div>
					U-SATはミッションとして「ロケットから放出後の落下中の姿勢を3DCGでリアルタイム可視化すること」を掲げており、
					Unityで開発された管制アプリケーション「U-Connect」は現地のPC上での姿勢の可視化のほか、
					インターネットを介した遠隔地のPCやスマートフォン上での姿勢可視化も可能であり、コマンド送信機能も備えるなど
					模擬人工衛星の管制アプリケーションとしては非常に高い機能を持っています。
				</div>
				<div>
					学生が開発したロケットの発射実験や模擬人工衛星の投下実験を合同で行う2017年度能代宇宙イベントにて打ち上げられ、
					姿勢のリアルタイム可視化と遠隔地からの姿勢観測にも成功しました。
				</div>
				<div>
					このプロジェクトは当時の学部2年生3名で開発を行い、私が模擬衛星の制御ソフトウェア及び管制ソフトウェアの開発、
					他2名がそれぞれ模擬衛星の構体/無線通信コンポーネントの開発、模擬衛星の電装系開発を担当しました。
				</div>
				<div className={"center"}>
					<a href={"http://www.ea.u-tokai.ac.jp/tsp/usat.html"} target={"_blank"} rel={"noopener noreferrer"}>
						U-SAT/U-Connect紹介ページ
					</a>
				</div>
			</div>,
	},
	{
		name: "公式Webサイト",
		languages: "HTML5/CSS3",
		libraries: "bootstrap",
		image: TSPHP,
		detailImage: TSPHPDetail,
		comment:
			<div>
				<div>
					衛星プロジェクトの公式Webサイトです。
					普段Web技術を扱うことがない団体であるため、引き継ぎ時を考え極力HTMLとCSSのみで保守/管理できるようにしました。
					レスポンシブデザインに対応するためbootstrapを使用しています。
				</div>
				<div className={"center"}>
					<a href={"http://www.ea.u-tokai.ac.jp/tsp/"} target={"_blank"} rel={"noopener noreferrer"}>
						衛星プロジェクト公式サイト
					</a>
				</div>
			</div>,
	},
	{
		name: "建学祭来場者アンケートアプリ",
		languages: "Kotlin",
		libraries: "",
		image: Questions,
		detailImage: Questions,
		comment:
			<div>
				<div>
					2019年度東海大学建学祭に衛星プロジェクトで出展した際の来場者アンケート用Androidアプリです。
					これまでは紙のアンケートを使用していましたが、毎年数百枚もの来場者アンケートを集計するのが困難になっていたため、
					このAndroidタブレットを使用したアンケートに変更しました。
				</div>
				<div>
					出展会場はWi-Fi環境が不安定であることがわかっていたため、回答は各端末に保存され、あとで集計できるようになっています。
					また普段タブレット端末に触れることが少ない年齢層の方にも配慮し、記述式の質問は設けず全て選択式としています。
				</div>
			</div>,
	},
	{
		name: "TRINE Editor",
		languages: "C#/Windows Forms",
		libraries: "DXライブラリ",
		image: TRINEEditor,
		detailImage: TRINEEditorDetail,
		comment:
			<div>
				<div>
					プログラミング未経験でも簡単な3Dゲームを製作することが可能なWindowsデスクトップアプリです。
					ゲームのロジックはGUIで作成でき、プログラミング未経験者にはハードルの高いテキスト言語を一切記述することなく3Dゲームの開発が可能です。
				</div>
				<div className={"center"}>
					<a href={"https://drive.google.com/drive/folders/0Bx5cVUH2TWk6RDhpRHhFd2hrckE"} target="_blank"
					   rel="noopener noreferrer">
						ダウンロードページ
					</a>
				</div>
			</div>,
	},
	{
		name: "TRINE 3D(開発中)",
		languages: "HTML5/CSS3/TypeScript",
		libraries: "Vue.js/three.js/Blockly/Electron",
		image: TRINE3D,
		detailImage: TRINE3DDetail,
		comment:
			<div>
				「TRINE Editor」の発展版です。テキスト言語を一切記述せずに3Dゲームが開発できるというコンセプトはそのままに、
				より直感的にロジックを組み立てることができるブロック型のビジュアルプログラミング環境を取り入れた3Dゲーム製作ツールとして開発中です。
				またWeb技術でデスクトップアプリを開発できるElectronを使用しているため、前作と違いマルチプラットフォーム展開が可能であり、
				将来的には学校などソフトウェアのダウンロード・インストールが制限された環境でも使用できるようWebアプリとして公開することも検討しています。
				現在はReactを使用したバージョンを開発中です。
			</div>,
	},
	{
		name: "テトリス with C++/CLI",
		languages: "C++/CLI/Windows Forms",
		libraries: "",
		image: Tetris,
		detailImage: Tetris,
		comment:
			<div>
				<div>C++の勉強用に作成したテトリスです。C++/CLIとWindows Formsで開発しました。</div>
				<div className={"center"}>
					<a href={"https://github.com/aquilaneo/Tetris"} target={"_blank"} rel={"noopener noreferrer"}>
						GitHub
					</a>
				</div>
			</div>,
	},
	{
		name: "ポートフォリオ",
		languages: "HTML5/CSS3/JavaScript ES6",
		libraries: "React/bootstrap",
		image: Portfolio,
		detailImage: Portfolio,
		comment: <div>このポートフォリオサイトです。自己紹介やこれまでの活動、よく使用する技術、製作した作品を掲載しています。</div>,
	},
	{
		name: "Poll",
		languages: "nim",
		libraries: "",
		image: Poll,
		detailImage: Poll,
		comment:
			<div>
				<div>
					「I」「l」「1」の3文字からなる6命令を使い、それ以外の文字はコメントとして扱われるBrainf*ck系のネタプログラミング言語です。
					もともとは衛星プロジェクト内のLightning Talk(LT)のネタになるかと思い、当時興味のあったnim言語で実装してみたものです。
				</div>
				<div className={"center"}>
					<a href={"https://github.com/aquilaneo/Pole"} target={"_blank"} rel={"noopener noreferrer"}>
						GitHub
					</a>
				</div>
			</div>,
	},
	{
		name: "SOLID BALL",
		languages: "Unity/C#",
		libraries: "",
		image: SolidBall,
		detailImage: SolidBallDetail,
		comment:
			<div>
				<div>
					高校生の頃製作したUnity製ゲームです。「宇宙空間での球技」をテーマとして作成しました。
					Unityインターハイ2015に出場し、特別出典として本選会場で展示を行いました。
				</div>
				<div className={"center"}>
					<a href={"https://drive.google.com/file/d/1AM67PX0Y4v4GrkBXNMmcqnci6uoOIjC-/view?usp=sharing"}
					   target={"_blank"} rel={"noopener noreferrer"}>
						ダウンロードページ
					</a>
				</div>
			</div>,
	}
]
