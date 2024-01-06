import { useBlockProps } from "@wordpress/block-editor";

export default function save() {
	return (
		<a {...useBlockProps.save()} href="">
			hello
		</a>
	);
}
