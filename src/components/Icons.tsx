import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";
type IconType = JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>;
const Icons = {
	logo: (props: IconType) => (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="160"
			height="40.816"
		>
			<path
				d="M 48.588 31.837 L 48.588 9.371 L 56.852 9.371 C 58.072 9.371 59.169 9.67 60.142 10.269 C 61.11 10.863 61.906 11.698 62.452 12.692 C 63.03 13.698 63.319 14.821 63.319 16.062 C 63.332 17.052 63.129 18.032 62.725 18.936 C 62.351 19.786 61.792 20.542 61.089 21.149 C 60.397 21.757 59.581 22.206 58.697 22.465 L 64.122 31.837 L 60.253 31.837 L 54.991 22.771 L 51.925 22.771 L 51.925 31.837 Z M 51.925 19.432 L 56.5 19.432 C 57.141 19.432 57.724 19.272 58.248 18.95 C 58.784 18.63 59.207 18.202 59.517 17.667 C 59.827 17.131 59.982 16.527 59.982 15.855 C 59.992 15.219 59.832 14.593 59.517 14.041 C 59.218 13.506 58.779 13.062 58.248 12.756 C 57.722 12.434 57.116 12.267 56.5 12.274 L 51.925 12.274 Z M 78.906 15.789 L 82.245 15.789 L 82.245 31.837 L 78.89 31.837 L 78.759 29.51 C 78.291 30.333 77.654 30.996 76.851 31.5 C 76.049 32.003 75.102 32.255 74.01 32.255 C 72.834 32.255 71.727 32.034 70.689 31.597 C 69.665 31.156 68.734 30.524 67.946 29.736 C 66.338 28.129 65.442 25.943 65.46 23.67 C 65.458 22.524 65.672 21.45 66.1 20.442 C 66.513 19.447 67.118 18.543 67.879 17.78 C 68.635 17.023 69.529 16.418 70.513 15.998 C 71.53 15.557 72.628 15.333 73.737 15.34 C 74.904 15.34 75.931 15.608 76.82 16.142 C 77.699 16.649 78.46 17.339 79.05 18.165 L 78.906 15.788 Z M 73.931 29.029 C 74.873 29.029 75.696 28.798 76.403 28.338 C 77.11 27.866 77.676 27.212 78.041 26.444 C 78.442 25.626 78.645 24.725 78.633 23.814 C 78.646 22.897 78.443 21.99 78.041 21.166 C 77.669 20.402 77.098 19.753 76.387 19.288 C 75.691 18.816 74.873 18.581 73.931 18.581 C 73.001 18.581 72.152 18.816 71.38 19.288 C 69.807 20.251 68.856 21.97 68.877 23.814 C 68.877 24.787 69.107 25.669 69.567 26.46 C 70.022 27.226 70.655 27.87 71.412 28.338 C 72.183 28.798 73.022 29.029 73.931 29.029 Z M 97.634 7.765 L 100.971 7.765 L 100.971 31.837 L 97.634 31.837 L 97.634 29.478 C 97.118 30.304 96.415 30.997 95.58 31.5 C 94.735 32.003 93.745 32.255 92.612 32.255 C 91.487 32.263 90.372 32.039 89.337 31.597 C 88.334 31.166 87.42 30.551 86.643 29.783 C 85.875 29.006 85.259 28.092 84.828 27.087 C 84.385 26.053 84.161 24.938 84.17 23.812 C 84.17 22.647 84.39 21.556 84.828 20.539 C 85.253 19.532 85.869 18.617 86.642 17.843 C 87.415 17.068 88.33 16.447 89.337 16.015 C 90.372 15.572 91.487 15.348 92.612 15.357 C 93.745 15.357 94.735 15.613 95.58 16.126 C 96.426 16.629 97.11 17.293 97.634 18.118 L 97.634 7.767 Z M 92.643 29.029 C 93.585 29.029 94.408 28.798 95.115 28.338 C 95.822 27.866 96.387 27.212 96.751 26.444 C 97.153 25.626 97.357 24.725 97.345 23.814 C 97.345 22.839 97.148 21.958 96.751 21.166 C 96.38 20.402 95.809 19.753 95.099 19.288 C 94.403 18.816 93.585 18.581 92.643 18.581 C 91.713 18.581 90.864 18.816 90.091 19.288 C 89.334 19.757 88.705 20.408 88.263 21.182 C 87.811 21.984 87.578 22.891 87.589 23.812 C 87.589 24.787 87.817 25.669 88.279 26.46 C 88.734 27.226 89.367 27.87 90.124 28.338 C 90.895 28.798 91.734 29.029 92.643 29.029 Z M 104.816 15.788 L 108.155 15.788 L 108.155 31.837 L 104.816 31.837 Z M 106.518 13.463 C 106.003 13.463 105.576 13.296 105.234 12.965 C 104.894 12.639 104.707 12.184 104.72 11.713 C 104.72 11.221 104.891 10.81 105.234 10.477 C 105.577 10.134 105.998 9.964 106.501 9.964 C 106.994 9.964 107.411 10.136 107.753 10.477 C 108.096 10.81 108.266 11.221 108.266 11.713 C 108.266 12.216 108.096 12.633 107.753 12.965 C 107.428 13.294 106.981 13.475 106.518 13.463 Z M 124.198 15.788 L 127.535 15.788 L 127.535 31.837 L 124.181 31.837 L 124.052 29.51 C 123.582 30.333 122.945 30.996 122.142 31.5 C 121.342 32.003 120.395 32.255 119.301 32.255 C 118.126 32.255 117.019 32.034 115.98 31.597 C 114.956 31.156 114.025 30.524 113.238 29.736 C 111.63 28.129 110.734 25.943 110.751 23.67 C 110.749 22.524 110.963 21.45 111.391 20.442 C 111.805 19.447 112.41 18.542 113.172 17.78 C 113.927 17.023 114.821 16.418 115.804 15.998 C 116.822 15.557 117.921 15.333 119.03 15.34 C 120.196 15.34 121.223 15.608 122.111 16.142 C 122.99 16.649 123.751 17.339 124.341 18.165 L 124.198 15.789 Z M 119.223 29.027 C 120.163 29.027 120.986 28.797 121.693 28.336 C 122.4 27.865 122.966 27.21 123.331 26.442 C 123.733 25.625 123.936 24.723 123.925 23.812 C 123.937 22.895 123.734 21.988 123.331 21.164 C 122.959 20.4 122.388 19.751 121.677 19.287 C 120.983 18.815 120.163 18.58 119.223 18.58 C 118.292 18.58 117.442 18.815 116.671 19.287 C 115.098 20.249 114.148 21.968 114.168 23.812 C 114.168 24.785 114.397 25.667 114.857 26.459 C 115.312 27.224 115.945 27.868 116.702 28.336 C 117.473 28.797 118.313 29.027 119.223 29.027 Z M 145.18 21.773 L 145.18 31.837 L 141.842 31.837 L 141.842 22.593 C 141.849 21.904 141.666 21.226 141.313 20.635 C 140.978 20.055 140.497 19.573 139.917 19.239 C 139.326 18.883 138.647 18.699 137.958 18.71 C 137.252 18.71 136.606 18.887 136.016 19.239 C 135.429 19.582 134.958 20.047 134.604 20.635 C 134.251 21.223 134.075 21.876 134.075 22.594 L 134.075 31.837 L 130.738 31.837 L 130.738 15.788 L 134.075 15.788 L 134.075 17.491 C 134.63 16.828 135.316 16.302 136.129 15.918 C 136.952 15.531 137.851 15.333 138.761 15.34 C 139.948 15.34 141.03 15.629 142.003 16.206 C 142.962 16.769 143.758 17.571 144.313 18.534 C 144.891 19.507 145.179 20.588 145.179 21.775 Z M 156.856 19.125 L 153.486 19.125 L 153.469 31.837 L 150.132 31.837 L 150.149 19.127 L 147.597 19.127 L 147.597 15.789 L 150.149 15.789 L 150.132 10.751 L 153.469 10.751 L 153.486 15.789 L 156.856 15.789 L 156.856 19.127 Z"
				fill="rgb(33,33,35)"
			></path>
			<g transform="translate(0 0.816)">
				<path
					d="M 0 0 L 39.682 0 L 39.682 39.682 L 0 39.682 Z"
					fill="transparent"
				></path>
				<path
					d="M 18.802 10.984 C 18.41 7.638 17.998 4.103 17.998 0 L 21.683 0 C 21.683 4.057 21.272 7.587 20.883 10.939 C 20.565 13.669 20.261 16.281 20.204 18.963 C 22.054 17.033 23.673 14.986 25.368 12.842 C 27.458 10.201 29.667 7.411 32.568 4.508 L 35.174 7.113 C 32.304 9.984 29.518 12.188 26.872 14.281 L 26.87 14.284 C 24.715 15.989 22.655 17.621 20.718 19.476 C 23.391 19.42 25.982 19.117 28.697 18.802 C 32.044 18.41 35.577 17.998 39.682 17.998 L 39.682 21.683 C 35.624 21.683 32.095 21.272 28.743 20.883 C 26.011 20.565 23.401 20.261 20.718 20.204 C 22.647 22.054 24.692 23.67 26.834 25.365 L 26.838 25.368 C 29.481 27.458 32.271 29.665 35.174 32.568 L 32.568 35.174 C 29.698 32.304 27.494 29.518 25.401 26.873 L 25.394 26.867 L 25.391 26.86 C 23.688 24.71 22.057 22.651 20.204 20.718 C 20.261 23.401 20.563 26.013 20.883 28.744 C 21.273 32.095 21.683 35.624 21.683 39.682 L 17.998 39.682 C 17.998 35.577 18.411 32.044 18.802 28.697 L 18.802 28.692 C 19.118 25.979 19.422 23.389 19.478 20.718 C 17.623 22.651 15.993 24.71 14.291 26.86 L 14.286 26.867 L 14.281 26.873 C 12.188 29.518 9.984 32.304 7.113 35.174 L 4.508 32.568 C 7.411 29.665 10.201 27.458 12.844 25.368 L 12.847 25.365 C 14.989 23.67 17.035 22.054 18.963 20.206 C 16.281 20.261 13.669 20.565 10.937 20.883 C 7.587 21.272 4.057 21.683 -0 21.683 L -0 17.998 C 4.103 17.998 7.638 18.411 10.984 18.802 C 13.7 19.118 16.291 19.422 18.963 19.478 C 17.025 17.62 14.963 15.989 12.808 14.282 C 10.163 12.188 7.378 9.984 4.508 7.115 L 7.113 4.506 C 10.015 7.409 12.224 10.199 14.313 12.841 C 16.008 14.984 17.628 17.032 19.478 18.962 C 19.42 16.291 19.118 13.701 18.802 10.988 L 18.802 10.983 Z"
					fill="rgb(33,33,35)"
				></path>
			</g>
		</svg>
	),
	paypal: () => (
		<svg width="48" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="48" height="24" rx="2" fill="#FBFAF8" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="m20.546 20.39.327-1.982-.73-.016h-3.48l2.42-14.621a.191.191 0 0 1 .067-.115.203.203 0 0 1 .129-.045h5.868c1.948 0 3.292.386 3.994 1.15.329.357.539.731.64 1.143.106.432.108.948.004 1.577l-.007.046v.403l.329.178c.277.14.497.3.666.484.282.306.464.695.54 1.156.08.474.054 1.039-.076 1.678-.15.734-.393 1.374-.721 1.898a3.978 3.978 0 0 1-1.142 1.193 4.74 4.74 0 0 1-1.537.662 8.03 8.03 0 0 1-1.922.211h-.457c-.326 0-.643.112-.892.313-.25.206-.415.486-.466.793l-.034.178-.578 3.492-.027.128c-.007.041-.018.061-.036.075a.1.1 0 0 1-.06.02h-2.82Z"
				fill="#28356A"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M30.418 7.573a9.358 9.358 0 0 1-.06.328c-.773 3.789-3.421 5.097-6.802 5.097h-1.722a.825.825 0 0 0-.826.676l-1.131 6.84a.426.426 0 0 0 .434.486h3.054c.362 0 .669-.25.726-.59l.03-.148.575-3.479.037-.19a.725.725 0 0 1 .725-.593h.457c2.958 0 5.274-1.145 5.951-4.459.283-1.384.136-2.54-.612-3.353a2.904 2.904 0 0 0-.836-.615Z"
				fill="#019DDE"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M29.609 7.266a6.328 6.328 0 0 0-.753-.16 10.03 10.03 0 0 0-1.517-.105h-4.6a.76.76 0 0 0-.317.068.704.704 0 0 0-.408.523l-.978 5.91-.028.171a.825.825 0 0 1 .826-.675h1.722c3.381 0 6.028-1.31 6.802-5.097.023-.112.043-.221.06-.328a4.23 4.23 0 0 0-.81-.307Z"
				fill="#00164C"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M22.014 7.592a.701.701 0 0 1 .408-.522.76.76 0 0 1 .318-.07h4.6a9.96 9.96 0 0 1 1.517.106 6.32 6.32 0 0 1 .926.21 4.3 4.3 0 0 1 .637.256c.23-1.4-.002-2.353-.796-3.216C28.748 3.407 27.17 3 25.147 3H19.28c-.413 0-.765.286-.829.676l-2.444 14.772c-.048.292.188.556.498.556h3.622l1.888-11.412Z"
				fill="#012F86"
			/>
		</svg>
	),
	master: () => (
		<svg width="48" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="48" height="24" rx="2" fill="#FBFAF8" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M29.806 21C34.884 21 39 16.97 39 12s-4.116-9-9.194-9c-5.077 0-9.193 4.03-9.193 9s4.116 9 9.193 9Z"
				fill="#F79E1B"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M18.194 21c5.077 0 9.193-4.03 9.193-9s-4.116-9-9.194-9C13.117 3 9 7.03 9 12s4.116 9 9.194 9Z"
				fill="#EB001B"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M24 5.022c-2.067 1.65-3.387 4.163-3.387 6.978 0 2.815 1.32 5.328 3.387 6.978 2.067-1.65 3.387-4.163 3.387-6.978 0-2.815-1.32-5.328-3.387-6.978Z"
				fill="#FF5F00"
			/>
		</svg>
	),
	appalePay: () => (
		<svg width="48" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="48" height="24" rx="2" fill="#FBFAF8" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M15.329 6.404c.066.598-.179 1.198-.543 1.63-.365.432-.963.767-1.549.722-.08-.585.216-1.196.553-1.579.378-.43 1.013-.752 1.539-.773Zm1.892 3.484c-.096.057-1.135.678-1.122 1.94.013 1.509 1.324 2.034 1.398 2.064l.003.001a.36.36 0 0 0-.004.012 5.576 5.576 0 0 1-.72 1.44c-.434.622-.885 1.241-1.597 1.254-.341.006-.57-.09-.807-.19-.249-.106-.507-.215-.916-.215-.428 0-.698.112-.958.22-.226.095-.445.186-.752.198-.686.025-1.209-.673-1.648-1.292-.896-1.267-1.581-3.581-.661-5.144a2.563 2.563 0 0 1 2.16-1.279c.382-.007.752.136 1.076.262.247.096.468.182.646.182.16 0 .375-.083.625-.18.394-.152.876-.338 1.374-.289.34.015 1.295.135 1.909 1.013a.447.447 0 0 1-.006.003Z"
				fill="#2A2D2E"
			/>
			<path
				d="M21.418 16h1.07v-3.065h2.167c1.613 0 2.755-1.136 2.755-2.767v-.012c0-1.63-1.142-2.743-2.755-2.743h-3.237V16Zm2.963-7.635c1.226 0 1.934.672 1.934 1.803v.012c0 1.13-.708 1.803-1.934 1.803H22.49V8.365h1.892Zm5.548 7.748c.863 0 1.535-.375 1.94-1.06h.095V16h1.035v-4.392c0-1.333-.875-2.136-2.44-2.136-1.368 0-2.344.678-2.51 1.684l-.007.036h1.036l.006-.018c.166-.5.672-.786 1.44-.786.958 0 1.44.429 1.44 1.22v.583l-1.839.114c-1.494.089-2.339.75-2.339 1.892v.012c0 1.166.923 1.904 2.143 1.904Zm-1.083-1.928v-.012c0-.637.428-.982 1.404-1.041l1.714-.107v.583c0 .916-.768 1.606-1.821 1.606-.744 0-1.297-.38-1.297-1.029Zm5.725 4.065c1.137 0 1.667-.417 2.196-1.857l2.506-6.808h-1.09l-1.755 5.278h-.095L34.57 9.585h-1.106l2.374 6.421-.119.38c-.232.739-.59 1.006-1.178 1.006-.143 0-.304-.005-.429-.03v.852c.143.024.322.036.458.036Z"
				fill="#2A2D2E"
			/>
		</svg>
	),
	americanExpress: () => (
		<svg width="48" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="48" height="24" rx="2" fill="#FBFAF8" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19.658 11.045h2.431L18.455 3h-2.808L12 11.045h2.383l.705-1.643h3.865l.705 1.643Zm8.922 0h-1.884L24.46 5.09v5.954h-2.14V3h3.44l1.908 5.126L29.565 3h3.404v8.045h-2.14V5.09l-2.249 5.954Zm-5.123 1.91v1.804h-4.765v1.31h4.656v1.759h-4.655v1.368h4.764V21h-6.929v-8.045h6.93ZM33.001 21H30.29l-2.018-2.494L26.266 21h-2.638l3.391-4.012-3.403-4.033h2.71l2.006 2.471 2.006-2.47h2.639l-3.404 3.987L33 21ZM17.008 4.896l-1.18 2.758H18.2l-1.192-2.758Z"
				fill="#006FAC"
			/>
		</svg>
	),
	visa: () => (
		<svg width="48" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="48" height="24" rx="2" fill="#FBFAF8" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M32.167 7.448A7.546 7.546 0 0 0 29.555 7c-2.88 0-4.91 1.446-4.927 3.516-.015 1.533 1.449 2.386 2.555 2.896 1.134.522 1.515.855 1.51 1.321-.008.715-.906 1.041-1.744 1.041-1.166 0-1.786-.16-2.743-.559l-.376-.17-.41 2.386c.682.297 1.94.556 3.248.569 3.064 0 5.053-1.429 5.075-3.64.01-1.213-.765-2.136-2.446-2.896-1.02-.493-1.644-.822-1.637-1.321 0-.442.528-.917 1.668-.917a5.378 5.378 0 0 1 2.182.409l.262.122.395-2.309ZM18.683 17.842l1.822-10.656h2.914l-1.823 10.656h-2.913ZM37.389 7.196h2.252L42 17.845h-2.705s-.267-1.224-.354-1.597l-2.052-.002h-.012l-1.669-.002c-.113.288-.613 1.6-.613 1.6h-3.061l4.328-9.764c.307-.695.829-.884 1.527-.884Zm-1.343 6.868c.242-.614 1.162-2.979 1.162-2.979-.008.014.048-.133.126-.333.08-.21.185-.48.26-.684l.197.92.675 3.076h-2.42Zm-22.661.396 2.853-7.266h3.087l-4.588 10.635-3.084.004-2.609-9.32c1.85.923 3.506 2.768 4.037 4.47l.304 1.477Z"
				fill="#1A1F71"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.737 7.187h-4.7L6 7.408c3.657.883 6.076 3.014 7.08 5.576l-1.022-4.898c-.176-.675-.688-.876-1.32-.9Z"
				fill="#F9A51A"
			/>
		</svg>
	),
	googlePay: () => (
		<svg width="48" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="48" height="24" rx="2" fill="#FBFAF8" />
			<g clipPath="url(#a)">
				<path
					d="M18.359 12.104c0-.34-.03-.68-.091-1.015h-4.984v1.921h2.854a2.236 2.236 0 0 1-.364.86 2.38 2.38 0 0 1-.691.655v1.251h1.703c.998-.868 1.573-2.153 1.573-3.672Z"
					fill="#4285F4"
				/>
				<path
					d="M13.284 16.981c1.425 0 2.627-.443 3.502-1.205l-1.703-1.248c-.475.305-1.085.477-1.799.477-1.378 0-2.548-.877-2.966-2.06H8.563v1.287a5.108 5.108 0 0 0 1.948 2.006 5.516 5.516 0 0 0 2.773.743Z"
					fill="#34A853"
				/>
				<path
					d="M10.318 12.946a2.832 2.832 0 0 1 0-1.91V9.749H8.563A4.764 4.764 0 0 0 8 11.991c0 .779.193 1.547.563 2.242l1.755-1.287Z"
					fill="#FBBC04"
				/>
				<path
					d="M23.135 12.863v3.517h-1.183V7.693h3.134a2.98 2.98 0 0 1 1.094.184c.348.13.666.322.935.568.267.235.48.52.626.836a2.393 2.393 0 0 1 0 2.005 2.52 2.52 0 0 1-.626.836c-.548.494-1.225.74-2.03.74h-1.951v.001Zm0-4.1v3.033h1.981c.314.006.623-.076.889-.236a1.54 1.54 0 0 0 .603-.66c.128-.271.168-.572.116-.865a1.48 1.48 0 0 0-.408-.782c-.011-.01-.02-.02-.033-.03-.149-.15-.33-.27-.532-.349a1.62 1.62 0 0 0-.636-.112l-1.98.002Zm7.552 1.48c.874 0 1.563.22 2.067.66.504.441.757 1.046.758 1.814v3.663H32.38v-.824h-.05c-.49.68-1.141 1.02-1.954 1.019-.693 0-1.273-.194-1.74-.582a1.876 1.876 0 0 1-.524-.654 1.772 1.772 0 0 1-.176-.802c0-.615.247-1.104.74-1.467.492-.363 1.148-.545 1.97-.546.7 0 1.28.123 1.733.364v-.256a1.21 1.21 0 0 0-.126-.545 1.283 1.283 0 0 0-.362-.442 1.73 1.73 0 0 0-1.14-.406c-.66 0-1.183.262-1.568.788l-1.038-.62c.57-.776 1.417-1.164 2.54-1.164Zm-1.53 4.318c0 .142.035.281.103.408a.908.908 0 0 0 .289.319 1.5 1.5 0 0 0 .918.291 1.947 1.947 0 0 0 1.329-.52c.391-.349.587-.757.587-1.226-.37-.277-.883-.416-1.542-.416-.48 0-.88.109-1.2.327-.324.223-.485.493-.485.817h.001ZM40 10.438 36.055 19h-1.22l1.464-2.996-2.595-5.566h1.284l1.874 4.27h.025l1.825-4.27H40Z"
					fill="#5F6368"
				/>
				<path
					d="M13.284 8.976a2.964 2.964 0 0 1 2.026.748L16.82 8.3A5.25 5.25 0 0 0 13.284 7c-.98 0-1.94.258-2.773.743A5.11 5.11 0 0 0 8.563 9.75l1.755 1.287c.418-1.183 1.588-2.06 2.966-2.06Z"
					fill="#EA4335"
				/>
			</g>
			<defs>
				<clipPath id="a">
					<path fill="#fff" transform="translate(8 7)" d="M0 0h32v12H0z" />
				</clipPath>
			</defs>
		</svg>
	),
	rightArrow: (props: IconType) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 256 256"
			focusable="false"
			color='var(--token-88b568e1-e6f8-4980-bc8c-36e51a98442d, rgb(255, 255, 255)) /* {"name":"White"} */'
			{...props}
		>
			<g
				color='var(--token-88b568e1-e6f8-4980-bc8c-36e51a98442d, rgb(255, 255, 255)) /* {"name":"White"} */'
				height="regular"
			>
				<path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
			</g>
		</svg>
	),
	star: (props: IconType) => (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
			<path
				d="M 18.097 2.289 C 18.693 0.441 21.307 0.441 21.903 2.289 L 25.136 12.312 C 25.403 13.14 26.174 13.7 27.044 13.698 L 37.575 13.675 C 39.517 13.671 40.325 16.158 38.751 17.296 L 30.218 23.467 C 29.513 23.977 29.219 24.884 29.489 25.71 L 32.765 35.719 C 33.37 37.565 31.254 39.101 29.686 37.957 L 21.179 31.748 C 20.477 31.235 19.523 31.235 18.821 31.748 L 10.314 37.957 C 8.746 39.101 6.63 37.565 7.235 35.719 L 10.511 25.71 C 10.781 24.884 10.487 23.977 9.782 23.467 L 1.249 17.296 C -0.325 16.158 0.483 13.671 2.425 13.675 L 12.956 13.698 C 13.826 13.7 14.597 13.14 14.864 12.312 Z"
				fill="currentColor"
			></path>
		</svg>
	),
	checkMark: (props: IconType) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 256 256"
			focusable="false"
			color='var(--token-818a283b-450e-452c-a8af-6b81d42f4181, rgb(33, 33, 35)) /* {"name":"Black"} */'
			{...props}
		>
			<g
				color='var(--token-818a283b-450e-452c-a8af-6b81d42f4181, rgb(33, 33, 35)) /* {"name":"Black"} */'
				height="regular"
			>
				<path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.58,0L104,136h0l-.11-.11L67.25,100.62a16,16,0,0,0-22.57.06l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24,.11.11,36.64,35.27a16,16,0,0,0,22.52,0L208.06,56,232,79.6Z"></path>
			</g>
		</svg>
	),
	lotus: (props: IconType) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 256 256"
			focusable="false"
			color='var(--token-818a283b-450e-452c-a8af-6b81d42f4181, rgb(33, 33, 35)) /* {"name":"Black"} */'
			{...props}
		>
			<g
				color='var(--token-818a283b-450e-452c-a8af-6b81d42f4181, rgb(33, 33, 35)) /* {"name":"Black"} */'
				height="regular"
			>
				<path d="M245.83,121.63a15.53,15.53,0,0,0-9.52-7.33,73.51,73.51,0,0,0-22.17-2.22c4-19.85,1-35.55-2.06-44.86a16.15,16.15,0,0,0-18.79-10.88,85.53,85.53,0,0,0-28.55,12.12,94.58,94.58,0,0,0-27.11-33.25,16.05,16.05,0,0,0-19.26,0A94.48,94.48,0,0,0,91.26,68.46,85.53,85.53,0,0,0,62.71,56.34,16.15,16.15,0,0,0,43.92,67.22c-3,9.31-6,25-2.06,44.86a73.51,73.51,0,0,0-22.17,2.22,15.53,15.53,0,0,0-9.52,7.33,16,16,0,0,0-1.6,12.27c3.39,12.57,13.8,36.48,45.33,55.32S113.13,208,128.05,208s42.67,0,74-18.78c31.53-18.84,41.94-42.75,45.33-55.32A16,16,0,0,0,245.83,121.63ZM59.14,72.14a.2.2,0,0,1,.23-.15A70.43,70.43,0,0,1,85.18,83.66,118.65,118.65,0,0,0,80,119.17c0,18.74,3.77,34,9.11,46.28A123.59,123.59,0,0,1,69.57,140C51.55,108.62,55.3,84,59.14,72.14Zm3,103.35C35.47,159.57,26.82,140.05,24,129.7a59.82,59.82,0,0,1,22.5-1.17,129.08,129.08,0,0,0,9.15,19.41,142.28,142.28,0,0,0,34,39.56A114.92,114.92,0,0,1,62.1,175.49ZM128,190.4c-9.33-6.94-32-28.23-32-71.23C96,76.7,118.38,55.24,128,48c9.62,7.26,32,28.72,32,71.19C160,162.17,137.33,183.46,128,190.4ZM170.82,83.66A70.43,70.43,0,0,1,196.63,72a.2.2,0,0,1,.23.15C200.7,84,204.45,108.62,186.43,140a123.32,123.32,0,0,1-19.54,25.48c5.34-12.26,9.11-27.54,9.11-46.28A118.65,118.65,0,0,0,170.82,83.66ZM232,129.72c-2.77,10.25-11.4,29.81-38.09,45.77a114.92,114.92,0,0,1-27.55,12,142.28,142.28,0,0,0,34-39.56,129.08,129.08,0,0,0,9.15-19.41A59.69,59.69,0,0,1,232,129.71Z"></path>
			</g>
		</svg>
	),
	person: (props: IconType) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 256 256"
			focusable="false"
			color='var(--token-818a283b-450e-452c-a8af-6b81d42f4181, rgb(33, 33, 35)) /* {"name":"Black"} */'
			{...props}
		>
			<g
				color='var(--token-818a283b-450e-452c-a8af-6b81d42f4181, rgb(33, 33, 35)) /* {"name":"Black"} */'
				height="regular"
			>
				<path d="M160,40a32,32,0,1,0-32,32A32,32,0,0,0,160,40ZM128,56a16,16,0,1,1,16-16A16,16,0,0,1,128,56Zm90.34,78.05L173.17,82.83a32,32,0,0,0-24-10.83H106.83a32,32,0,0,0-24,10.83L37.66,134.05a20,20,0,0,0,28.13,28.43l16.3-13.08L65.55,212.28A20,20,0,0,0,102,228.8l26-44.87,26,44.87a20,20,0,0,0,36.41-16.52L173.91,149.4l16.3,13.08a20,20,0,0,0,28.13-28.43Zm-11.51,16.77a4,4,0,0,1-5.66,0c-.21-.2-.42-.4-.65-.58L165,121.76A8,8,0,0,0,152.26,130L175.14,217a7.72,7.72,0,0,0,.48,1.35,4,4,0,1,1-7.25,3.38,6.25,6.25,0,0,0-.33-.63L134.92,164a8,8,0,0,0-13.84,0L88,221.05a6.25,6.25,0,0,0-.33.63,4,4,0,0,1-2.26,2.07,4,4,0,0,1-5-5.45,7.72,7.72,0,0,0,.48-1.35L103.74,130A8,8,0,0,0,91,121.76L55.48,150.24c-.23.18-.44.38-.65.58a4,4,0,1,1-5.66-5.65c.12-.12.23-.24.34-.37L94.83,93.41a16,16,0,0,1,12-5.41h42.34a16,16,0,0,1,12,5.41l45.32,51.39c.11.13.22.25.34.37A4,4,0,0,1,206.83,150.82Z"></path>
			</g>
		</svg>
	),
	search: (props: IconType) => (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 256 256"
			width="20"
			height="20"
		>
			<path
				d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"
				fill="currentColor"
			></path>
		</svg>
	),
	instagram: (props: IconType) => (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 256 256"
			focusable="false"
		>
			<g
				color='var(--token-818a283b-450e-452c-a8af-6b81d42f4181, rgb(0, 0, 0)) /* {"name":"Black"} */'
				height="regular"
			>
				<path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
			</g>
		</svg>
	),
	twitter: (props: IconType) => (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 256 256"
			focusable="false"
			color='var(--token-818a283b-450e-452c-a8af-6b81d42f4181, rgb(0, 0, 0)) /* {"name":"Black"} */'
		>
			<g
				color='var(--token-818a283b-450e-452c-a8af-6b81d42f4181, rgb(0, 0, 0)) /* {"name":"Black"} */'
				height="regular"
			>
				<path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
			</g>
		</svg>
	),
	facebook: (props: IconType) => (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 256 256"
			focusable="false"
			color='var(--token-818a283b-450e-452c-a8af-6b81d42f4181, rgb(0, 0, 0)) /* {"name":"Black"} */'
		>
			<g
				color='var(--token-818a283b-450e-452c-a8af-6b81d42f4181, rgb(0, 0, 0)) /* {"name":"Black"} */'
				height="regular"
			>
				<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
			</g>
		</svg>
	),
};

export default Icons;