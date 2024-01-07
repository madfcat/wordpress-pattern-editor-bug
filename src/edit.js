import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit() {
	return (
		<a {...useBlockProps()} href="" onClick={ ( event ) => event.preventDefault() } >
			hello
		</a>
	);
}
