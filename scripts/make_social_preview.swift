import AppKit
import Foundation

let root = URL(fileURLWithPath: CommandLine.arguments[1])
let sourceURL = root.appendingPathComponent("src/assets/social/share-art-source.png")
let outputURL = root.appendingPathComponent("og-image.png")
guard let source = NSImage(contentsOf: sourceURL) else { fatalError("Could not read social artwork") }
let size = NSSize(width: 1200, height: 630)
guard let rep = NSBitmapImageRep(
  bitmapDataPlanes: nil, pixelsWide: 1200, pixelsHigh: 630,
  bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true,
  isPlanar: false, colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0
), let graphics = NSGraphicsContext(bitmapImageRep: rep) else { fatalError("Could not create output canvas") }
NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = graphics
graphics.imageInterpolation = .high
NSColor(calibratedRed: 0.98, green: 0.86, blue: 0.88, alpha: 1).setFill()
NSBezierPath(rect: NSRect(x: 0, y: 0, width: 1200, height: 630)).fill()
source.draw(in: NSRect(x: 0, y: 0, width: 1200, height: 630),
            from: NSRect(x: 0, y: 109, width: 1536, height: 806),
            operation: .sourceOver, fraction: 1)

let panel = NSBezierPath(roundedRect: NSRect(x: 58, y: 58, width: 490, height: 514), xRadius: 28, yRadius: 28)
NSColor(calibratedRed: 1, green: 0.965, blue: 0.965, alpha: 1).setFill()
panel.fill()
NSColor(calibratedRed: 1, green: 1, blue: 0.99, alpha: 1).setStroke()
panel.lineWidth = 3
panel.stroke()

func draw(_ string: String, x: CGFloat, y: CGFloat, font: NSFont, color: NSColor) {
  let attrs: [NSAttributedString.Key: Any] = [.font: font, .foregroundColor: color]
  string.draw(at: NSPoint(x: x, y: y), withAttributes: attrs)
}
let berry = NSColor(calibratedRed: 0.55, green: 0.15, blue: 0.31, alpha: 1)
let pink = NSColor(calibratedRed: 0.78, green: 0.30, blue: 0.48, alpha: 1)
draw("K-POP · MAKE IT YOURS", x: 102, y: 409, font: NSFont.monospacedSystemFont(ofSize: 14, weight: .medium), color: pink)
draw("bias sorter", x: 98, y: 321, font: NSFont(name: "Georgia-Bold", size: 61) ?? .boldSystemFont(ofSize: 61), color: berry)
draw("♡", x: 414, y: 330, font: NSFont(name: "Georgia", size: 47) ?? .systemFont(ofSize: 47), color: pink)
let rule = NSBezierPath()
rule.move(to: NSPoint(x: 101, y: 294)); rule.line(to: NSPoint(x: 504, y: 294))
NSColor(calibratedRed: 0.91, green: 0.75, blue: 0.81, alpha: 1).setStroke()
rule.lineWidth = 1.5; rule.stroke()
draw("Your idols, in your order.", x: 103, y: 249, font: NSFont(name: "Georgia", size: 24) ?? .systemFont(ofSize: 24), color: berry)
draw("PICK A PAIR  ·  FIND YOUR TOP 10", x: 103, y: 204, font: NSFont.monospacedSystemFont(ofSize: 12, weight: .regular), color: pink)
NSGraphicsContext.restoreGraphicsState()
guard let png = rep.representation(using: .png, properties: [:]) else { fatalError("Could not encode PNG") }
try png.write(to: outputURL)
print("Wrote \(outputURL.path) · 1200 × 630")
