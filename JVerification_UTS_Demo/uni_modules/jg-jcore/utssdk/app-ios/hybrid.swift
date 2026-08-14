import Foundation
@_implementationOnly import JCore

/// Keep the vendor archive inside unimoduleJgJcore without initializing JCore.
/// The native type remains internal and never appears in the public UTS API.
@inline(never)
func jcoreNativeLinkAnchor() {
  _ = NSStringFromClass(JGCOREAPI.self)
}
