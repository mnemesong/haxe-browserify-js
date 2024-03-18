package;

import js.Syntax;
import js.node.Module;
import js.node.Path;
import browserifyJs.Browserify;

class BrowserifyTest {

	public static function main() {
		var testFilePath = Path.resolve(
			Syntax.code( "module.path" ),
			"..",
			"test.js"
		);
		var b = Browserify.browserifyFiles( [FilePath( testFilePath )] );
		b.bundle( ( err, src ) -> {
			Sure.sure( err == null );
			var str = src.toString();
			trace( str );
			Sure.sure( str.indexOf( 'console.log("This is test file!");' ) != -1 );
			Sure.sure( str.indexOf( 'const printGreeting = () => {' ) != -1 );
			trace( "success!" );
			return str;
		} );
	}
}
