import CodeBattler from "./img/works/CodeBattler.jpg";
import VirtualSat from "./img/works/VirtualSat.jpg";
import VirtualSatDetail from "./img/works/VirtualSat_detail.jpg";
import USAT from "./img/works/U-SAT.jpg";
import TSPHP from "./img/works/TSPHP.jpg";
import TRINEEditor from "./img/works/TRINEEditor.jpg";

import Tetris from "./img/works/Tetris.jpg";

import Poll from "./img/works/Pole.jpg";
import SolidBall from "./img/works/SOLID BALL.jpg";

export const works = [
	{
		name: "火星溶岩チューブの探索",
		languages: "Python",
		libraries: "",
		comment: <div>あああ</div>,
	},
	{
		name: "Code Battler",
		languages: "HTML5/CSS3/JavaScript ES6",
		libraries: "three.js/Blockly",
		image: CodeBattler,
		detailImage: CodeBattler,
		comment:
			<div>
				<div>
					ブロックを組み合わせて命令を作成するビジュアルプログラミング環境でロボットのプログラムを作成し、
					ロボットをゴールへ導く、敵を倒すといった目標を達成していくプログラミング学習ツールです。
					Webアプリとしてブラウザ上で動作し、ロボットの動きは3Dグラフィックスで描画されます。
					また、2人のプレイヤーがそれぞれ同じ画面上でロボットのプログラムを作成し、対戦させるモードも搭載しています。
				</div>
				<div>
					ICT特定プログラムの卒業制作として開発した作品で、2019年度ICT特定プログラム最優秀賞を獲得しました。
				</div>
			</div>,
	},
	{
		name: "Virtual Sat",
		languages: "PICマイコン/C言語",
		libraries: "Unity/C#",
		image: VirtualSat,
		detailImage: VirtualSatDetail,
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
			</div>,
	},
	{
		name: "U-SAT/U-Connect",
		languages: "Raspberry Pi/Python",
		libraries: "Unity/C#",
		image: USAT,
		detailImage: USAT,
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
			</div>,
	},
	{
		name: "公式Webサイト",
		languages: "HTML5/CSS3",
		libraries: "bootstrap",
		image: TSPHP,
		detailImage: TSPHP,
		comment:
			<div>
				衛星プロジェクトの公式Webサイトです。
				普段Web技術を扱うことがない団体であるため、引き継ぎ時を考え極力HTMLとCSSのみで保守/管理できるようにしました。
				レスポンシブデザインに対応するためbootstrapを使用しています。
			</div>,
	},
	{
		name: "TRINE Editor",
		languages: "C#/Windows Forms",
		libraries: "DXライブラリ",
		image: TRINEEditor,
		detailImage: TRINEEditor,
		comment:
			<div>
				プログラミング未経験でも簡単な3Dゲームを製作することが可能なWindowsデスクトップアプリです。
				ゲームのロジックはGUIで作成でき、プログラミング未経験者にはハードルの高いテキスト言語を一切記述することなく3Dゲームの開発が可能です。
			</div>,
	},
	{
		name: "TRINE 3D",
		languages: "HTML5/CSS3/TypeScript",
		libraries: "Vue.js/three.js/Blockly/Electron",
		comment:
			<div>
				「TRINE Editor」の発展版です。テキスト言語を一切記述せずに3Dゲームが開発できるというコンセプトはそのままに、
				より直感的にロジックを組み立てることができるブロック型のビジュアルプログラミング環境を取り入れた3Dゲーム製作ツールとして開発中です。
				またWeb技術でデスクトップアプリを開発できるElectronを使用しているため、前作と違いマルチプラットフォーム展開が可能であり、
				将来的には学校などソフトウェアのダウンロード・インストールが制限された環境でも使用できるようWebアプリとして公開することも検討しています。
			</div>,
	},
	{
		name: "テトリス with C++/CLI",
		languages: "C++/CLI/Windows Forms",
		libraries: "",
		image: Tetris,
		detailImage: Tetris,
		comment: <div>C++の勉強用に作成したテトリスです。C++/CLIとWindows Formsで開発しました。</div>,
	},
	{
		name: "ポートフォリオ",
		languages: "HTML5/CSS3/JavaScript ES6",
		libraries: "React/bootstrap",
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
				<div>
					「Hello World」と表示するソースコード例↓
				</div>
				<div style={{border: "solid thin black"}}>
					I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1<br/>
					I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1<br/>
					I1I1I1I1I1I1I1I1llI1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1<br/>
					I1I1I1I1I1I1llI1I1I1I1I1I1I1llllI1I1I1llIII1I1I1I1I1I1I1I1I1I1I1<br/>
					I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1llI1I1I1I1I1I1I1I1I1I1<br/>
					I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1<br/>
					I1I1I1I1I1I1I1I1I1I1I1I1I1llI1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1I1<br/>
					I1I1I1I1I1I1llI1I1I1lllIlIlIlIlIlIlllIlIlIlIlIlIlIlIll
				</div>
			</div>,
	},
	{
		name: "SOLID BALL",
		languages: "Unity/C#",
		libraries: "",
		image: SolidBall,
		detailImage: SolidBall,
		comment:
			<div>
				高校生の頃製作したUnity製ゲームです。「宇宙空間での球技」をテーマとして作成しました。
				Unityインターハイ2015に出場し、特別出典として本選会場で展示を行いました。
			</div>,
	}
]
