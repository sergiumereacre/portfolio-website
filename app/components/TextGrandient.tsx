type TextGradientProps = {
	text: string;
	from?: string;
	via?: string;
	to?: string;
	className?: string;
};

export default function TextGradient(props: TextGradientProps) {
	const from = props.from || "from-orange-700";
	const via = props.via || "via-blue-500";
	const to = props.to || "to-green-400";

	// Concatenate the existing class names and the additional class names
	const classNames = `bg-gradient-to-r ${from} ${via} ${to} text-transparent bg-clip-text bg-300% animate-gradient ${
		props.className || ""
	}`;

	return <span className={classNames}>{props.text}</span>;
}
